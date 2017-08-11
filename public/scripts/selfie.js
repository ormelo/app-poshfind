function demo_app() {
    canvasWidth  = canvas.width;
    canvasHeight = canvas.height;
    ctx = canvas.getContext('2d');

    ctx.fillStyle = "rgb(0,255,0)";
    ctx.strokeStyle = "rgb(0,255,0)";

    var scale = Math.min(max_work_size/canvasWidth, max_work_size/canvasHeight);
    var w = (canvasWidth*scale)|0;
    var h = (canvasHeight*scale)|0;

    img_u8 = new jsfeat.matrix_t(w, h, jsfeat.U8_t | jsfeat.C1_t);
    edg = new jsfeat.matrix_t(w, h, jsfeat.U8_t | jsfeat.C1_t);
    work_canvas = document.createElement('canvas');
    work_canvas.width = w;
    work_canvas.height = h;
    work_ctx = work_canvas.getContext('2d');
    ii_sum = new Int32Array((w+1)*(h+1));
    ii_sqsum = new Int32Array((w+1)*(h+1));
    ii_tilted = new Int32Array((w+1)*(h+1));
    ii_canny = new Int32Array((w+1)*(h+1));

    options = new demo_opt();

}

window.onload=function(){
// References to all the element we will need.
var video = document.querySelector('#camera-stream'),
    image = document.querySelector('#snap'),
    start_camera = document.querySelector('#start-camera'),
    controls = document.querySelector('.controls'),
    take_photo_btn = document.querySelector('#capture-photo'),
    delete_photo_btn = document.querySelector('#delete-photo'),
    download_photo_btn = document.querySelector('#download-photo'),
    error_message = document.querySelector('#error-message');


// The getUserMedia interface is used for handling camera input.
// Some browsers need a prefix so here we're covering all the options
navigator.getMedia = ( navigator.getUserMedia ||
                      navigator.webkitGetUserMedia ||
                      navigator.mozGetUserMedia ||
                      navigator.msGetUserMedia);


if(!navigator.getMedia){
  displayErrorMessage("Your browser doesn't have support for the navigator.getUserMedia interface.");
}
else{

  // Request the camera.
  navigator.getMedia(
    {
      video: { frameRate: { ideal: 10, max: 20 } }
    },
    // Success Callback
    function(stream){

      // Create an object URL for the video stream and
      // set it as src of our HTLM video element.
      video.src = window.URL.createObjectURL(stream);
      streamTrack = stream.getTracks()[0];
      // Play the video element to start the stream.
      video.play();
      video.onplay = function() {
        showVideo();
      };

    },
    // Error Callback
    function(err){
      displayErrorMessage("There was an error with accessing the camera stream: " + err.name, err);
    }
  );

}


  // Start video playback manually.
  video.play();
  showVideo();

var forceRedraw = function(element){

    if (!element) { return; }

    var n = document.createTextNode(' ');
    var disp = element.style.display;
    element.appendChild(n);
    element.style.display = 'none';

    setTimeout(function(){
        if(document.body.scrollTop == 0)
          document.body.scrollTop = 1;
        else
          document.body.scrollTop = 0;
    },20);
}

scr = setInterval(function(){ forceRedraw(document.getElementById('start-camera')); }, 600); 

take_photo_btn.addEventListener("click", function(e){
  e.preventDefault();
  clearInterval(scr);
  var snap = takeSnapshot();

  // Show image. 
  image.setAttribute('src', snap);
  image.classList.add("visible");

  // Enable delete and save buttons
  delete_photo_btn.classList.remove("disabled");
  download_photo_btn.classList.remove("disabled");

  // Set the href attribute of the download button to the snap url.
  download_photo_btn.href = snap;

  demo_app();
  tick(faceClassifier, 'face');
  tick(upperBodyClassifier, 'upperbody');

  // Pause video playback of stream.
  video.pause();
  $('#selfieMsg').html('Scanning...');
  if(screen.width < 1000) {
    $('.mask').addClass('scanning');
  } else {
    $('body').css('opacity','0.4');
  }
    setTimeout(function () {
      if(screen.width < 1000) {
        $('.mask').removeClass('scanning');
      } else {
        $('body').css('opacity','1');
      }
      var fswRatio = faceW/(shoulderW*2);
      // alert('F/S:'+fswRatio);
      //$('.app').css('opacity','0');
      $('#take-photo').html('');
      $('.capture').css('visibility','hidden');
      $('#confirmation').show();
      $(".trigger").toggleClass("drawn");

      
        localStorage.setItem('pic',canvas.toDataURL());
        localStorage.setItem('faceX',faceX);
        localStorage.setItem('faceY',faceY);
        localStorage.setItem('faceW',faceW);
        localStorage.setItem('faceH',faceH);
        stepEMeasure();
    }, 4000);

});

function stepEMeasure() {
  $("#step_selfie").removeClass('completed');
  $("#step_emeasure").addClass('completed');
  //location.href='/update';
  window.onScanComplete();
}

function getDataUri(url, callback) {
    var image = new Image();

    image.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
        canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

        canvas.getContext('2d').drawImage(this, 0, 0);

        // Get raw image data
        callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''), canvas);

        // ... or get as Data URI
        callback(canvas.toDataURL('image/png'), canvas);
    };

    image.src = url;
}

function showVideo(){
  // Display the video stream and the controls.
  $('#camera-stream').css('visibility', 'visible');

  hideUI();
  video.classList.add("visible");
  // controls.classList.add("visible");
}

function takeSnapshot(){
  // Here we're using a trick that involves a hidden canvas element.  

  var hidden_canvas = document.querySelector('canvas'),
      context = hidden_canvas.getContext('2d');

  var width = video.videoWidth,
      height = video.videoHeight;

  if (width && height) {

    // Setup a canvas with the same dimensions as the video.
    hidden_canvas.width = width;
    hidden_canvas.height = height;

    // Make a copy of the current frame in the video on the canvas.

    if(location.href.indexOf('?s=') !== -1) {
      getDataUri('samples/'+location.href.substring(location.href.indexOf('?s=')+3), function(dataUri, i) {
        // Do whatever you'd like with the Data URI!
        console.log('selfie:', dataUri);
        context.drawImage(i, 0, 0, width, height);
        localStorage.setItem('selfie', dataUri);
      });
      
    } else {
      context.drawImage(video, 0, 0, width, height);
    }

    // Turn the canvas image into a dataURL that can be used as a src for our photo.
    return hidden_canvas.toDataURL('image/png');
  }
}

function displayErrorMessage(error_msg, error){
  error = error || "";
  if(error){
    console.log(error);
  }

  error_message.innerText = error_msg;

  hideUI();
  error_message.classList.add("visible");
}

function hideUI(){
  // Helper function for clearing the app UI.

  //controls.classList.remove("visible");
  start_camera.classList.remove("visible");
  video.classList.remove("visible");
  snap.classList.remove("visible");
  error_message.classList.remove("visible");
}

$('#btn_got_it').on('click', function(e) {
  $('.box_instructions').hide();
});
}

function beeLeft(elemId) {
    $("#"+elemId).animate({left: "-=100"}, 1500, "swing", beeRight);
}