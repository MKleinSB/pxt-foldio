/**
 * Custom blocks
 */
//% weight=120 color=#0fbc11 icon=""
namespace Foldio {
    /**
 
     */
    //% blockId=device_foldio_leftEar block="Wenn linkes Ohr berührt wird"
    //%blockExternalInputs=false
    export function lTouch(body: Action): void {
        input.onPinPressed(TouchPin.P0, body)
    }

    /**
  
     */
    //% blockId=device_foldio_rightEar block="Wenn rechtes Ohr berührt wird"
    //%blockExternalInputs=false
    export function rTouch(body: Action): void {
        input.onPinPressed(23, body) //need to be changes to compile correct
    }

    /**
     
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