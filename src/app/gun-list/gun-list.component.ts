import {Component, OnInit} from "@angular/core";
import {Gun} from "../gun";
import {GunService} from "../gun.service";

@Component({
    selector: 'app-gun-list',
    templateUrl: './gun-list.component.html',
    styleUrls: ['./gun-list.component.css']
})


export class GunListComponent implements OnInit {
    guns: Gun[];
    selectedGun: Gun = null;

    ngOnInit(): void {
        this.getGuns();
    }

    constructor(private gunService: GunService) {
    }

    getGuns() {
        this.guns = this.gunService.getGuns();
    }

    onSelect(gun: Gun): void {
        this.selectedGun = gun;
    }
}
