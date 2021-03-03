const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '832d96f5',
  apiSecret: 'GT9Kf9vhgwVkWETs',
});

const from = 'Vonage APIs';
const to = '212648680297';
const text = 'Hello from api sms';

nexmo.message.sendSms(from, to, text);