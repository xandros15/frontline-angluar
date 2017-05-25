import {Component, Input, OnInit} from "@angular/core";
import {Gun} from "../gun";

@Component({
    selector: 'app-gun-detail',
    templateUrl: './gun-detail.component.html',
    styleUrls: ['./gun-detail.component.css']
})
export class GunDetailComponent implements OnInit {

    @Input() gun: Gun;

    constructor() {

    }

    ngOnInit() {
    }

    getDps()  {
        //50attack speed is 1 attack per sec
        const realAttackSpeed = this.gun.attackSpeed / 50;
        return Math.round(this.gun.damage * realAttackSpeed);
    }
}
