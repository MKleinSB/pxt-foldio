/**
 * Custom blocks for foldio
 */

const enum LeiseoderLaut {
    //% block="laut"
    laut = 1,
    //% block="leise"
    leise = 0
}

//% color=#ff0000 icon="\uf135"
namespace Foldio {
    /**
     * Tue etwas wenn das linke Ohr berührt wurde
     */
    //% blockId=device_foldio_leftEar block="Wenn linkes Ohr berührt"
    //% blockExternalInputs=false
    export function lTouch(body: Action): void {
        input.onPinPressed(TouchPin.P0, body)
    }

    /**
     * Tue etwas wenn das rechte Ohr berührt wurde
     */
    //% blockId=device_foldio_rightEar block="Wenn rechtes Ohr berührt"
    //% blockExternalInputs=false
    export function rTouch(body: Action): void {
        input.onPinPressed(23, body) //needed to be changed to compile correctly 23 = P0
    }


    /**
      * einfache if-Statement zur Überprüfung des Geräuschpegels der Umgebung über einen fest eingestellten Bereich
      * @param soundlevel enum describing what 1 or 0 on laut and leise 
      * @param body checks the mic and returns true if the noise level is over a hard coded 530. (0-1024)
      */
    //% weight=95 blockGap=8
    //% blockId=foldio_soundlevel
    //% block="es ist | %soundlevel"
    export function lautLeise(soundlevel: LeiseoderLaut): boolean {
        if ((pins.analogReadPin(50)) > 530 && soundlevel == 1) {
            return true;
        }
        return false
    }
    /**
     * Lasse die Augen 2x blinken
     */
    //% blockId=device_foldio_blinken block="َAugen blinken lassen"
    //% blockExternalInputs=false
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
    //% blockExternalInputs=false
    export function speak(): void {
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(659, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
    /**
      * Schalten die Augen mit maximaler Helligkeit ein.
      */
    //% weight=93 blockGap=8
    //% blockId=foldio_aufwachen
    //% block="Aufwachen"
    export function aufWachen() {
        led.setBrightness(255)
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . . . . .
            . . . . .
            `)
    }

    /**
     * Nach und nach die Helligkeit reduzieren
     */
    //% weight=92 blockGap=8
    //% blockId=foldio_schlafen
    //% block="Schlafen"
    export function schlafen() {
        if (led.brightness() == 255) {
            for (let a = 255; a > 0; a--) {
                led.setBrightness(a)
                basic.pause(7)
            }
        }

    }

}
