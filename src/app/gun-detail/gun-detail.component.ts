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
}
