import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarifsComponent}      from './tarifs/tarifs.component';
import { PageNotFoundComponent }      from './page-not-found.component';
import {TarifUserComponent} from './tarifUser/tarifUser.component';
import {TarifInfoComponent} from './tarifInfo/tarifInfo.component';
import {TarifSummaryComponent} from './tarifSummary/tarifSummary.component';
import {AuthGuard} from "./auth-guard.service";

const routes: Routes = [
    { path: 'tarifs',  component: TarifsComponent },
    { path: 'tarifUser',  component: TarifUserComponent, canActivate: [AuthGuard] },
    { path: 'tarifInfo',  component: TarifInfoComponent, canActivate: [AuthGuard] },
    { path: 'tarifSummary',  component: TarifSummaryComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/tarifs', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
