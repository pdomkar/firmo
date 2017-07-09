import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarifsComponent}      from './tarifs/tarifs.component';
import { PageNotFoundComponent }      from './page-not-found.component';
import {TarifUserComponent} from './tarifUser/tarifUser.component';
import {TarifInfoComponent} from './tarifInfo/tarifInfo.component';
import {TarifSummaryComponent} from './tarifSummary/tarifSummary.component';

const routes: Routes = [
    { path: 'tarifs',  component: TarifsComponent },
    { path: 'tarifUser',  component: TarifUserComponent },
    { path: 'tarifInfo',  component: TarifInfoComponent },
    { path: 'tarifSummary',  component: TarifSummaryComponent },
    { path: '', redirectTo: '/tarifs', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
