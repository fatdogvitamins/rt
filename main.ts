function getindex () {
    let index = 0
    return index
}
let CHANGE = 0
music.play(music.stringPlayable("C5 C E D A F G E ", 120), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("C5 C E D A F G E ", 120), music.PlaybackMode.UntilDone)
let _12345678910 = "AD"
basic.forever(function () {
    ESP8266_IoT.connectWifi("1665774", _12345678910)
    _12345678910 += _12345678910
    CHANGE += 1
    datalogger.includeTimestamp(FlashLogTimeStampFormat.Days)
    datalogger.log(
    datalogger.createCV(_12345678910, CHANGE),
    datalogger.createCV(_12345678910, CHANGE),
    datalogger.createCV(_12345678910, CHANGE),
    datalogger.createCV(_12345678910, RTC_DS1307.getTime(RTC_DS1307.TimeType.DAY)),
    datalogger.createCV(convertToText(edubitPotentioBit.readPotValue()), 0)
    )
    servos.P0.run(50)
    servos.P0.setPulse(1500)
    for (let index = 0; index <= 100; index++) {
        index += 1
        OLED.drawLoading(CHANGE)
        getindex()
    }
    serial.writeBuffer(serial.readBuffer(EventBusValue.MICROBIT_PIN_EVT_RISE))
    serial.writeBuffer(serial.readBuffer(EventBusSource.MICROBIT_ID_IO_P0))
    serial.writeBuffer(serial.readBuffer(EventBusSource.MICROBIT_ID_IO_P1))
    serial.writeBuffer(serial.readBuffer(EventBusSource.MICROBIT_ID_IO_P2))
    serial.writeBuffer(serial.readBuffer(EventBusSource.MICROBIT_ID_IO_P3))
    serial.writeBuffer(serial.readBuffer(EventBusSource.MICROBIT_ID_IO_P4))
    serial.writeBuffer(serial.readBuffer(EventBusSource.MICROBIT_ID_IO_P5))
})
