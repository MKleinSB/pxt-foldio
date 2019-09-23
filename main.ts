/**
 * Custom blocks for foldio
 */
//% weight=120 color=#0fbc11 icon="\uf296"
namespace Foldio {
    /**
     * Tue etwas wenn das linke Ohr berührt wurde
     */
    //% blockId=device_foldio_leftEar block="Wenn linkes Ohr berührt"
    //%blockExternalInputs=false
    export function lTouch(body: Action): void {
        input.onPinPressed(TouchPin.P0, body)
    }

    /**
     * Tue etwas wenn das rechte Ohr berührt wurde
     */
    //% blockId=device_foldio_rightEar block="Wenn rechtes Ohr berührt"
    //%blockExternalInputs=false
    export function rTouch(body: Action): void {
        input.onPinPressed(23, body) //needed to be changed to compile correctly 23 = P0
    }

    /**
     * Lasse die Augen 2x blinken
     */
    //% blockId=device_foldio_blinken block="َAugen blinken lassen"
    //%blockExternalInputs=false
    export function blinken() {
        basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . . . . .
        . . . . .
        `)
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
        basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . . . . .
        . . . . .
        `)
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    }
    /**
      * Ein kleines Geräusch machen
      * @param n describe parameter here, eg: 5
      * @param s describe parameter here, eg: "Hello"
      * @param e describe parameter here
      */
    //% blockId=device_foldio_sprechen block="َSprechen"
    //% weight=96 blockGap=8
    //%blockExternalInputs=false
    export function speak(): void {
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(659, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
    }

}
