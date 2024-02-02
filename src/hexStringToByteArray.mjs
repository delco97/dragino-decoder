export function hexStringToByteArray(hexString) {
    let bytes = [];
    for (let i = 0; i < hexString.length; i += 2) {
        let byte = parseInt(hexString.substring(i, i + 2), 16);
        bytes.push(byte);
    }
    return bytes;
}