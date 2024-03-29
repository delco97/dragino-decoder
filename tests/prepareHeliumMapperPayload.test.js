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
            'accuracy': null,
            'altitude': null,
            'latitude': draginoPayload.latitude,
            'longitude': draginoPayload.longitude,
        });
    });
    test('Prepare Helium Mapper Payload with latitude and longitude NOT set', () => {
        let draginoPayload = {
            "alarm": true,
            "battery": 2.885,
            "latitude": null,
            "longitude": null,
            "pitch": -12.34,
            "roll": 12.34,
        }
        expect(prepareHeliumMapperPayload(draginoPayload)).toEqual({
            'accuracy': null,
            'altitude': null,
            'latitude': draginoPayload.latitude,
            'longitude': draginoPayload.longitude,
        });
    });
});