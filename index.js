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

    webpush.setGCMAPIKey('AAAAOBIJvSY:APA91bGezg-tBmLJ7xKsFCa6EEyCqvibb7KtfubDJEBIuUFmMrM6t06SdIGZ6FIZMu0K57EzAy3HfUjA-yC6brm9rXJqOonEl8mn4F4-lhyY3uuYzx3BJNvlmnhDkdCxP7vlj4RrkS3k');
    //Above is obtained from https://console.firebase.google.com/project/push-notification-web-d0beb/settings/cloudmessaging

    webpush.setVapidDetails(
      'mailto:sampath.oops@gmail.com',
      vapidKeys.publicKey,
      vapidKeys.privateKey
    );

    const pushSubscription = {
      endpoint: 'https://android.googleapis.com/gcm/send/dqeyAVdBBYg:APA91bE8mq-Nl8I0WDUyLSbXzH-1Y18vXaH_8VM4QBOMcV5n2CXoWbFWqSO9IPpmTNSrGtrdW68_mnUcWwR08ICZXje8x2JeCQlcN1L-EMPzo0U8kLljbA5rCG-L7QEtV5VWiSzqjrJ6',
      keys: {
        auth: '7P2G6yPjWyVySgyvwid9PQ==',
        p256dh: 'BLJaat9FW_NbKBiLIxv8GY2Pvjs-P7pJ7km8Ti8MV7fVj70xIQ3aGWO50d5s7tyP1stNYnXiEmyjmpBM73fh62c='
      }
    };

    webpush.sendNotification(pushSubscription, 'The server remembers!')
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
