import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GunDetailComponent } from './gun-detail/gun-detail.component';
import { GunListComponent } from './gun-list/gun-list.component';
import { GunCompareComponent } from "./gun-compare/gun-compare.component";
import {GunService} from "./gun.service";

@NgModule({
  declarations: [
    AppComponent,
    GunDetailComponent,
    GunListComponent,
    GunCompareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GunService],
  bootstrap: [AppComponent]
})
export class AppModule { }
