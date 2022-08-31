basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        basic.showArrow(ArrowNames.North)
        basic.pause(100)
        basic.showArrow(ArrowNames.NorthEast)
        basic.pause(100)
        basic.showArrow(ArrowNames.East)
        basic.pause(100)
        basic.showArrow(ArrowNames.SouthEast)
        basic.pause(100)
        basic.showArrow(ArrowNames.South)
        basic.pause(100)
        basic.showArrow(ArrowNames.SouthWest)
        basic.pause(100)
        basic.showArrow(ArrowNames.West)
        basic.pause(100)
        basic.showArrow(ArrowNames.NorthWest)
        basic.pause(100)
        basic.showArrow(ArrowNames.North)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    while (input.buttonIsPressed(Button.B)) {
        basic.showArrow(ArrowNames.North)
        basic.pause(100)
        basic.showArrow(ArrowNames.NorthWest)
        basic.pause(100)
        basic.showArrow(ArrowNames.West)
        basic.pause(100)
        basic.showArrow(ArrowNames.SouthWest)
        basic.pause(100)
        basic.showArrow(ArrowNames.South)
        basic.pause(100)
        basic.showArrow(ArrowNames.SouthEast)
        basic.pause(100)
        basic.showArrow(ArrowNames.East)
        basic.pause(100)
        basic.showArrow(ArrowNames.NorthEast)
        basic.pause(100)
        basic.showArrow(ArrowNames.North)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
