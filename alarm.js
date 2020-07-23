'use strict';

chrome.alarms.onAlarm.addListener(function () {
  chrome.notifications.create({   //creating our notification and adding info
    type: 'basic',
    iconUrl: 'logo.png',
    title: 'Alarm',
    message: 'It is time to get up and move!',
    buttons: [{ title: 'Ok!' }],
    priority: 0, //default is 0
  });
});

// chrome.notifications.onButtonClicked.addListener(function () {
//   chrome.storage.sync.get(['minutes'], function (item) {
//     chrome.alarms.create({ delayInMinutes: item.minutes });
//   });
// });