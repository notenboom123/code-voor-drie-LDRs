let tijd2 = 0
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
let tijd1 = input.runningTimeMicros()
basic.forever(function () {
    let tijd3 = 0
    if (tijd1 > 400) {
        if (pins.digitalReadPin(DigitalPin.P0) < 300) {
            tijd1 = 1
            tijd2 = input.runningTimeMicros()
        }
    }
    if (tijd2 < 1) {
        if (pins.digitalReadPin(DigitalPin.P0) == 0) {
            tijd1 = 0
            tijd2 = input.runningTimeMicros()
        }
    }
    if (tijd3 < 2) {
        if (pins.digitalReadPin(DigitalPin.P0) == 0) {
            tijd1 = 0
            tijd2 = input.runningTimeMicros()
        }
    }
    serial.writeLine("" + tijd2 + "-" + tijd1 + "=" + (tijd2 - tijd1))
})
