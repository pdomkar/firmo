import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import {PageNotFoundComponent} from './page-not-found.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import {TarifUserComponent} from "./tarifUser/tarifUser.component";
import {Consts} from "./consts";
import {TarifInfoComponent} from "./tarifInfo/tarifInfo.component";
import {FormsModule} from "@angular/forms";
import {EqualValidator} from "./tarifUser/equalValidator.directive";
import {TarifSummaryComponent} from "./tarifSummary/tarifSummary.component";
import {HttpModule} from "@angular/http";
import {NavigatorComponent} from "./navigator/navigator.component";


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpModule, LocalStorageModule.withConfig({
    prefix: 'my-app',
    storageType: 'localStorage'
  }) ],
  declarations: [ AppComponent, TarifsComponent, TarifUserComponent, TarifInfoComponent,
    TarifSummaryComponent, NavigatorComponent, EqualValidator, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ Consts ]
})
export class AppModule { }
