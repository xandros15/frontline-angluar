import {Component, OnInit} from "@angular/core";
import {Gun} from "../gun";
import {GunService} from "../gun.service";

@Component({
    selector: 'app-gun-compare',
    templateUrl: './gun-compare.component.html',
    styleUrls: ['./gun-compare.component.css']
})

export class GunCompareComponent implements OnInit {

    select1: Gun = null;
    select2: Gun = null;
    select3: Gun = null;
    guns: Gun[];

    constructor(private gunService: GunService) {
    }

    ngOnInit(): void {
        this.getGuns();
    }

    getGuns(): void {
        this.guns = this.gunService.getGuns();
    }

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
