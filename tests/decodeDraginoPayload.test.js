import { decodeDraginoPayload } from "../src/decodeDraginoPayload.mjs";
import { hexStringToByteArray } from "../src/hexStringToByteArray.mjs";

describe('decodeDraginoPayload', () => {
   test('Decode complete example', () => {
       expect(decodeDraginoPayload(hexStringToByteArray("06765FF2960A4B4504D2FB2E"))).toEqual({
           "alarm": true,
           "battery": 2.885,
           "latitude": 42.3519,
           "longitude": -87.9094,
           "pitch": -12.34,
           "roll": 12.34,
       });
   });
   test('Decode empty', () => {
         expect(() => {
              decodeDraginoPayload(hexStringToByteArray(""));
         }).toThrow("Payload too short");
   });
});