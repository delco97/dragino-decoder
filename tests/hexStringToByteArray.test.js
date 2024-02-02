import { hexStringToByteArray } from '../src/hexStringToByteArray.mjs';

describe('hexStringToByteArray', () => {
    test('Converts hex string to byte array with even length', () => {
        const hexString = "54657374496e707574";
        const expectedArray = [84, 101, 115, 116, 73, 110, 112, 117, 116];
        expect(hexStringToByteArray(hexString)).toEqual(expectedArray);
    });

    test('Converts hex string to byte array with odd length', () => {
        const hexString = "48656c6c6f576f726c6";
        const expectedArray = [72, 101, 108, 108, 111, 87, 111, 114, 108, 6];
        expect(hexStringToByteArray(hexString)).toEqual(expectedArray);
    });

    test('Converts empty hex string to empty byte array', () => {
        const hexString = "";
        const expectedArray = [];
        expect(hexStringToByteArray(hexString)).toEqual(expectedArray);
    });

    test('Converts a character hex representation to byte array', () => {
        const hexString = "61"; // ASCII code for 'a'
        const expectedArray = [97]; // ASCII code for 'a'
        expect(hexStringToByteArray(hexString)).toEqual(expectedArray);
    });
});