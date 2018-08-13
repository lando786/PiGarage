function onClick(){
    const Gpio = require('onOff').Gpio;
    const relay = new Gpio(14, 'out');
    relay.writeSync(1);
    relay.writeSync(0);
    alert("Clicked!");
}