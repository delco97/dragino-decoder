import {prepareHeliumMapperPayload} from "../src/prepareHeliumMapperPayload.mjs";

describe('prepareHeliumMapperPayload', () => {
    test('Prepare Helium Mapper Payload with latitude and longitude set', () => {
        let draginoPayload = {
            "alarm": true,
            "battery": 2.885,
            "latitude": 42.3519,
            "longitude": -87.9094,
            "pitch": -12.34,
            "roll": 12.34,
        }
        expect(prepareHeliumMapperPayload(draginoPayload)).toEqual({
            'accuracy': 3, // Hardcoded because Dragino doesn't have this information
            'altitude': 3, // Hardcoded because Dragino doesn't have this information
            'latitude': draginoPayload.latitude,
            'longitude': draginoPayload.longitude,
        });
    });
    test('Prepare Helium Mapper Payload with latitude and longitude NOT set', () => {
        let draginoPayload = {
            "alarm": true,
            "battery": 2.885,
            "latitude": null,
            "longitude":null,
            "pitch": -12.34,
            "roll": 12.34,
        }
        expect(prepareHeliumMapperPayload(draginoPayload)).toEqual({
            'accuracy': 3, // Hardcoded because Dragino doesn't have this information
            'altitude': 3, // Hardcoded because Dragino doesn't have this information
            'latitude': draginoPayload.latitude,
            'longitude': draginoPayload.longitude,
        });
    });
});