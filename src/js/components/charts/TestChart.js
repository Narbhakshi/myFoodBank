import React from "react";

let isSubscribed = false;
let swRegistration = null;
let pushButton =  document.getElementById('registerMeButton');
const applicationServerPublicKey = 'BPX35Ep7HKIFg3nEgZYovYiZuG8iJx1q2DCZ5FVbLzYN5xqtnm' +
    'M_I1vexxLxUDPZsMao7EcoEkdZwegvBT_nep4';

export default class TestChart extends React.Component {

  componentDidMount() {
    pushButton =  document.getElementById('registerMeButton');
    console.log('ComponentDIDMOunt');
}

registerSW(e) {
  console.log('REGISTERING SW');
  //alert('Hi ');
  var self = this;
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Service Worker and Push is supported');

    navigator.serviceWorker.register('/service-worker.js')
    .then(function(swReg) {
      console.log('Service Worker is registered', swReg);
      swRegistration = swReg;
      self.initializeUI();
    })
    .catch(function(error) {
      console.error('Service Worker Error', error);
    });
  } else {
    console.warn('Push messaging is not supported');
    pushButton.textContent = 'Push Not Supported';
  }
}

initializeUI(e) {
  var self = this;
  pushButton.disabled = true;
  if (isSubscribed) {
    self.unsubscribeUser();
  } else {
    self.subscribeUser();
  }

  swRegistration.pushManager.getSubscription()
  .then(function(subscription) {
    isSubscribed = !(subscription === null);

    if (isSubscribed) {
      console.log('User IS subscribed.');
    } else {
      console.log('User is NOT subscribed.');
    }

    self.updateBtnText();
  });
}

subscribeUser(e) {
  const applicationServerKey = this.urlB64ToUint8Array(applicationServerPublicKey);
  var self = this;
  swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: applicationServerKey
  })
  .then(function(subscription) {
    console.log('User is subscribed.');

    self.updateSubscriptionOnServer(subscription);
    self.isSubscribed = true;
    self.updateBtnText();
  })
  .catch(function(err) {
    console.log('Failed to subscribe the user: ', err);
    self.updateBtnText();
  });
}

unsubscribeUser() {
  var self = this;
  swRegistration.pushManager.getSubscription()
  .then(function(subscription) {
    if (subscription) {
      return subscription.unsubscribe();
    }
  })
  .catch(function(error) {
    console.log('Error unsubscribing', error);
  })
  .then(function() {
    self.updateSubscriptionOnServer(null);
    console.log('User is unsubscribed.');
    isSubscribed = false;
    self.updateBtnText();
  });
}

urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

updateSubscriptionOnServer(subscription) {
  // TODO: Send subscription to application server

  const subscriptionJson = document.querySelector('.js-subscription-json');
  const subscriptionDetails = document.querySelector('.js-subscription-details');

  if (subscription && subscriptionJson && subscriptionDetails) {
    subscriptionJson.textContent = JSON.stringify(subscription);
    subscriptionDetails.classList.remove('is-invisible');
  } else {
    subscriptionDetails.classList.add('is-invisible');
  }
}

updateBtnText() {
  if (isSubscribed && pushButton) {
    pushButton.textContent = 'Disable Push Messaging';
  } else {
    pushButton.textContent = 'Enable Push Messaging';
  }
  pushButton.disabled = false;
}

  render() {
    return (
      <div class="testChart">
        <button type="button" id="registerMeButton" class="btn" onClick={this.registerSW.bind(this)}>Click Me</button>
        <section id="js-subscription-details" class="js-subscription-details"></section>
        <pre><code id="js-subscription-json" class="js-subscription-json"></code></pre>

      </div>
    );
  }
}
