var express = require('express');
var app = express();
var path = require('path');
var webpush = require('web-push');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/fit-profile', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'steps.html'));
});

app.get('/home', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'home.html'));
});

app.get('/sendnotif', function(request, response) {
    // VAPID keys should only be generated only once.
    var vapidKeys = webpush.generateVAPIDKeys();

    webpush.setGCMAPIKey('AAAAb0Jcd5Y:APA91bF0de1UNG5yFMZinQhn1We89nTyigofC-kIrTGeM2RoI4bgSXUcYyUy17W4IgRJborqAENOb-t4zEo2MQD32LoAr64KFQdb8CPKdV-yOzVdG7RDhrWcqTvx96Yaf9_oQsX70Yl-');
    //Above is obtained from https://console.firebase.google.com/project/push-notification-web-d0beb/settings/cloudmessaging

    webpush.setVapidDetails(
      'mailto:sampath.oops@gmail.com',
      vapidKeys.publicKey,
      vapidKeys.privateKey
    );

    const pushSubscription = {
      endpoint: 'https://android.googleapis.com/gcm/send/fjynyHGdf9A:APA91bHgvxqAdUnWHQramoS0q3Evt7tXrxv_HqiCJFzP0u8PPm7k_5JVerEsz8rV8lBA1iAGpc8Rrt2PPQw9LEcTVxQH4J4eRswz9NxyvhTTpznTpHQILL9NQKSzZlXPmyMNHB8lMCO4',
      keys: {
        auth: '0m4fZVW8uvABnWGfdHGVRg==',
        p256dh: 'BLTrnWMcDMoRVIaL14Rw1bU1AVb-0iENqapOwCnNdnDIg-H7G6A3c_cMvHLFQmtyXRV8gJ0tiNwvsAJjqG58itw='
      }
    };

    webpush.sendNotification(pushSubscription, 'First notification.')
    .then(function(result){
      console.log(result)
    }).catch(function(error){
      console.log('error', error)
    });

});

app.get('/fit-test', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'steps.html'));
});


app.get('/', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/onboard/step2', function(request, response) {
  response.writeHead(301,
  {Location: '/'}
);
response.end();
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
