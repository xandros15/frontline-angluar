import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GunDetailComponent } from './gun-detail/gun-detail.component';
import { GunListComponent } from './gun-list/gun-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GunDetailComponent,
    GunListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
