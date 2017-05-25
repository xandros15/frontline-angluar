import {Component} from "@angular/core";
import {GUNS} from "../guns";
import {Gun} from "../gun";

@Component({
    selector: 'app-gun-list',
    templateUrl: './gun-list.component.html',
    styleUrls: ['./gun-list.component.css']
})


export class GunListComponent {
    guns = GUNS;
    selectedGun = null;

    onSelect(gun : Gun): void {
        this.selectedGun = gun;
    }
}
