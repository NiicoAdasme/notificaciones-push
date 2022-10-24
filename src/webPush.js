const webPush = require('web-push');

webPush.setVapidDetails(
    'mailto:noreply@perfect-period-364415.firebaseapp.com', 
    process.env.PUBLIC_VAPID_KEY, 
    process.env.PRIVATE_VAPID_KEY
);

module.exports = webPush;