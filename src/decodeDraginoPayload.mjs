export function decodeDraginoPayload(bytes) {
    if (bytes.length < 12) {
        throw new Error("Payload too short");
    }

    let alarm = !!(bytes[6] & 0x40);
    let value = ((bytes[6] & 0x3f) << 8) | bytes[7];

    let battery = value / 1000;
    value = bytes[8] << 8 | bytes[9];
    if (bytes[8] & 0x80) {
        value |= 0xFFFF0000;
    }

    let roll = value / 100;
    value = bytes[10] << 8 | bytes[11];
    if (bytes[10] & 0x80) {
        value |= 0xFFFF0000;
    }

    let pitch = value / 100;

    value = bytes[0] << 16 | bytes[1] << 8 | bytes[2];
    if (bytes[0] & 0x80) {
        value |= 0xFFFFFF000000;
    }
    let value2 = bytes[3] << 16 | bytes[4] << 8 | bytes[5];
    if (bytes[3] & 0x80) {
        value2 |= 0xFFFFFF000000;
    }

    let latitude = null;
    let longitude = null;

    if (value === 0x0FFFFF && value2 === 0x0FFFFF) {
        console.log("gps disabled (low battery)")
    } else if (value === 0 && value2 === 0) {
        console.log("gps no position yet")
    } else {
        latitude = value / 10000;//gps latitude,units: Â°
        longitude = value2 / 10000;//gps longitude,units: Â°
    }

    return {
        'latitude': latitude,
        'longitude': longitude,
        'roll': roll,
        'pitch': pitch,
        'battery': battery,
        'alarm': alarm
    };
}