import {decoder} from "../src/decoder.mjs";
import {hexStringToByteArray} from "../src/hexStringToByteArray.mjs";

describe('decoder', () => {
    test('Decode complete example', () => {
        expect(
            decoder(
                hexStringToByteArray("06765FF2960A4B4504D2FB2E"), undefined
            )
        ).toEqual({
            "accuracy": null,
            "altitude": null,
            "latitude": 42.3519,
            "longitude": -87.9094,
        });
    });
    test('Decode empty', () => {
        expect(() => {
            decoder("");
        }).toThrow("Payload too short");
    });
});