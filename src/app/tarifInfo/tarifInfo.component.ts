import { Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { LocalStorageService } from 'angular-2-local-storage';
import { TarifRegistration } from '../tarifRegistration';
import { Consts } from '../consts';
@Component({
    selector: 'my-tarif-user',
    templateUrl: './tarifUser.component.html'
})

export class TarifUserComponent implements OnInit {
    tarifRegistration: TarifRegistration;

    constructor(
      private router: Router,
      private localStorageService: LocalStorageService,
      private Consts: Consts
    ) { }

    ngOnInit(): void {
      this.tarifRegistration = this.localStorageService.get(Consts.KEY_TARIF_REGISTRATION);
    }

    onSubmit(): void {
      this.router.navigate(['/tarifInfo']);
    }

}
