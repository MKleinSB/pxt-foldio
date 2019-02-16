/**
 * Custom blocks
 */
//% weight=120 color=#0fbc11 icon=""
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
        input.onPinPressed(23, body) //needed to be changed to compile correctly
    }

    /**
     * Lasse die Augen 2x blinken
     */
    //% blockId=device_foldio_blinken block="َAugen blinken lassen"
    //%blockExternalInputs=false
    export function Blink(): void {
        basic.showLeds(`
            # . . . #
            . . . . .
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
            # . . . #
            . . . . .
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




}
