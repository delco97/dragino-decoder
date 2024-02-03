export function prepareHeliumMapperPayload(draginoPayload) {
    return {
        'accuracy': null, // Hardcoded because Dragino doesn't have this information
        'altitude': null, // Hardcoded because Dragino doesn't have this information
        'latitude': draginoPayload.latitude,
        'longitude': draginoPayload.longitude,
    };
}