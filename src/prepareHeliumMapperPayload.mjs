
export function prepareHeliumMapperPayload(draginoPayload) {
    return {
        'accuracy': 3, // Hardcoded because Dragino doesn't have this information
        'altitude': 3, // Hardcoded because Dragino doesn't have this information
        'latitude': draginoPayload.latitude,
        'longitude': draginoPayload.longitude,
    };
}