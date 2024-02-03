import {decodeDraginoPayload} from "./decodeDraginoPayload.mjs";
import {prepareHeliumMapperPayload} from "./prepareHeliumMapperPayload.mjs";

export function decoder(bytes, port) {

    let draginoPayload = decodeDraginoPayload(bytes);
    let heliumMapperPayload = prepareHeliumMapperPayload(draginoPayload);

    return heliumMapperPayload;
}
