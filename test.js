const TetraJS = require('./index');
const radio = new TetraJS('COM16', 115200);

// setInterval(() => {
//     console.log(radio)
// }, 5000);


// var presenceCheck = radio.sendPresenceCheck({
//     issi: 15432342
// })

// presenceCheck.on('result', function (result) {
//     console.log('Presence check result: ', result);
// });

// presenceCheck.on('delivered', function () {
//     console.log('Message delivered!');
// });



// radio.enableGpsReporting({
//     issi: 12543343,
//     enableReporting: false,
//     enableBacklog: false,
// })

// radio.enableGpsReporting({
//     issi: 15432342,
//     enableReporting: true,
//     enableBacklog: false,
// })

// var gpsReporting = radio.enableGpsReporting({
//     issi: 9012112,
//     enableReporting: false,
// })

// gpsReporting.on('sendPrepared', (message)=>{
//     console.log('GPS Reporting sent: ', message)

// })

radio.sendMessage({
    issi: 12543343,
    body: 'test',
    instantMessage: false,
    deliveryReport: true,
    consumedReport: false
});

// radio.requestImmediateLocationReport({
//     issi: 15432342,
//     shortReport: true
// });
//12543343
// radio.sendMessage({
//     issi: '901020400010010',
//     body: `Je moeder`,
//     instantMessage: true,
//     deliveryReport: false,
//     consumedReport: false
// });


//reboot radio
// radio.sendCommand({
//     issi: 12543343,
//     body: 'AT R'
// })

// radio.sendCommand({
//     issi: 12543343,
//     body: 'AT+CBC?'
// })

// radio.sendCommand({
//     issi: 12543343,
//     body: 'AT+CPBW=,99991,0,"TetraFleet1"',
// })

// radio.sendCommand({
//     issi: 12543343,
//     body: 'AT+CPBW=,99992,0,"TetraFleet2"',
// })

// radio.sendCommand({
//     issi: 12543343,
//     body: 'AT+CPBW=,99993,0,"TetraFleet3"',
// })

// radio.sendCommand({
//     issi: 12543343,
//     body: 'AT+CPBW=,99994,0,"TetraFleet4"',
// })

// radio.sendCommand({
//     issi: 12543343,
//     body: 'AT+CPBW=,99995,0,"TetraFleet5"',
// })


// radio.sendCommand({
//     issi: 12543343,
//     body: 'AT+CPBR=1,100',
// })

//contacten toevoegen: AT+CPBW=,9999,0,"TetraFleet"
//contacten verwijderen: AT+CPBW=,9999

//RF Power: AT+CPWC="3L"
//PIN Status: AT+CPIN?


radio.on('remote-control-response', function (message) {
    console.log('Remote control response: ', message);

});

//15432342

// radio.requestReportTriggers({
//     issi: 15432342
// })

// radio.sendMessage({
//     issi: 15432342,
//     body: `AT+CTOM=0`,
//     instantMessage: false,
//     deliveryReport: false,
//     consumedReport: false
// });

// var report = radio.requestImmediateLocationReport({
//     issi: 9012112,
//     shortReport: true
// });

// var report2 = radio.requestImmediateLocationReport({
//     issi: 12543343,
//     shortReport: true
// });

// var report3 = radio.requestImmediateLocationReport({
//     issi: 9018300,
//     shortReport: true
// });


// report.once('received', (msg)=>{
//     console.log('Received1: ', msg)

//     radio.sendMessage({
//         issi: msg.issi,
//         body: `${msg.latitude}, ${msg.longitude}`,
//         instantMessage: true,
//         deliveryReport: true,
//         consumedReport: false
//     });
    
// })

// report2.once('received', (msg)=>{
//     console.log('Received2: ', msg)

//     radio.sendMessage({
//         issi: msg.issi,
//         body: `${msg.latitude}, ${msg.longitude}`,
//         instantMessage: true,
//         deliveryReport: true,
//         consumedReport: false
//     });
// })

// report3.once('received', (msg)=>{
//     console.log('Received3: ', msg)

//     radio.sendMessage({
//         issi: msg.issi,
//         body: `${msg.latitude}, ${msg.longitude}`,
//         instantMessage: true,
//         deliveryReport: true,
//         consumedReport: false
//     });
// })


// // radio.requestImmediateLocationReport({
// //     issi: 12543343,
// //     shortReport: true
// // });

radio.on('gps', function (message) {
    console.log('GPS received: ', message);
});


radio.on('status', function (status) {
    console.log('Status received: ', status);
});



// radio.requestBasicLocationParameters({
//     issi: 9012112
// });

//SEND MESSAGE
// 

// message.on('sent', function () {
//     console.log('Message sent!');
// });

// message.on('delivered', function () {
//     console.log('Message delivered!');
// });

// message.on('consumed', function () {
//     console.log('Message consumed!');
// });

radio.on('received-message', function (message) {
    console.log('Message received: ', message);
});

radio.on('callStatus', function (callStatus) {
    console.log('callStatus: ', callStatus);
});


