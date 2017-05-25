import {Component} from "@angular/core";
import {GUNS} from "../guns";
import {Gun} from "../gun";

@Component({
    selector: 'app-gun-compare',
    templateUrl: './gun-compare.component.html',
    styleUrls: ['./gun-compare.component.css']
})

export class GunCompareComponent {
    select1: Gun = null;
    select2: Gun = null;
    select3: Gun = null;
    guns: Gun[] = GUNS;

    getDps(gun: Gun) {
        return Math.round(gun.damage * gun.attackSpeed / 50);
    }

    getSelectedArray() {
        const array = [];

        if (this.select1) {
            array.push(this.select1);
        }
        if (this.select2) {
            array.push(this.select2);
        }
        if (this.select3) {
            array.push(this.select3);
        }

        return array;
    }
}
