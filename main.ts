input.onButtonPressed(Button.A, function () {
    basic.pause(200)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(500)
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
})
