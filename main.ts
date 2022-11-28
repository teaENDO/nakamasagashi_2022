radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Happy)
    basic.showNumber(receivedNumber)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
radio.setGroup(1)
radio.setTransmitPower(0)
