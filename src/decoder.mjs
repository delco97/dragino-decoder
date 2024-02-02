import { decodeDraginoPayload } from "./decodeDraginoPayload.mjs";
import { prepareHeliumMapperPayload } from "./prepareHeliumMapperPayload.mjs";
export function decoder(bytes, port) {

    let draginoPayload = decodeDraginoPayload(bytes);
    let heliumMapperPayload = prepareHeliumMapperPayload(draginoPayload);

    return heliumMapperPayload;
}

// let bytes = hexStringToByteArray("06765FF2960A4B4504D2FB2E")
// let decoded = Decoder(bytes, undefined)
// console.log(decoded)
