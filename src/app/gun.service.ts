import {Injectable} from '@angular/core';
import {GUNS} from "./mock-guns";
import {Gun} from "./gun";

@Injectable()
export class GunService {
    getGuns(): Gun[] {
        return GUNS;
    }
}
