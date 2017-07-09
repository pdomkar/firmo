import { Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { LocalStorageService } from 'angular-2-local-storage';
import { TarifRegistration } from '../tarifRegistration';
import { Consts } from '../consts';
@Component({
    selector: 'my-tarifs',
    templateUrl: './tarifs.component.html'
})

export class TarifsComponent implements OnInit {
  tarifs: any;
  tarifsPrice: any;

    constructor(
      private router: Router,
      private localStorageService: LocalStorageService,
      private Consts: Consts
    ) {   }

    ngOnInit(): void {
      this.tarifs = Consts.TARIFS;
      this.tarifsPrice = Consts.TARIFS_PRICE;
    }


    chooseTarif(type: number): void {
      let tarifRegistration: any = this.localStorageService.get(Consts.KEY_TARIF_REGISTRATION);
      if (tarifRegistration == null) {
        tarifRegistration = new TarifRegistration(type);
      } else {
        tarifRegistration.type = type;
      }
      this.localStorageService.set(Consts.KEY_TARIF_REGISTRATION, tarifRegistration);
      this.router.navigate(['/tarifUser']);
    }
}
