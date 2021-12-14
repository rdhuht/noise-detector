let noise = 0
basic.showIcon(IconNames.EigthNote)
basic.pause(100)
basic.clearScreen()
basic.showIcon(IconNames.QuarterNote)
basic.clearScreen()
basic.pause(100)
basic.forever(function () {
    led.plotBarGraph(
    noise,
    255
    )
})
basic.forever(function () {
    noise = input.soundLevel()
})
