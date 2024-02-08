let sensor_level = 0
let open = 0
let closed = 0
let locked = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P3, 784)
    sensor_level = pins.analogReadPin(AnalogPin.P3)
    open = pins.map(
    sensor_level,
    0,
    1023,
    0,
    100
    )
    closed = pins.map(
    sensor_level,
    0,
    1023,
    100,
    sensor_level
    )
    locked = pins.map(
    0,
    0,
    1023,
    500,
    1023
    )
    if (open) {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showString("open")
    }
    if (closed) {
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showString("closed")
    }
    if (locked) {
        music.stopAllSounds()
        basic.showString("locked")
    }
})
