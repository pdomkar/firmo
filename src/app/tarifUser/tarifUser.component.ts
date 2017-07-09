import { Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { LocalStorageService } from 'angular-2-local-storage';
import { TarifRegistration } from '../tarifRegistration';
@Component({
    selector: 'my-tarifs',
    templateUrl: './tarifs.component.html'
})

export class TarifsComponents implements OnInit {

    constructor(private router: Router, private localStorageService: LocalStorageService) {
    }

    ngOnInit(): void {

    }


    chooseTarif(type: number): void {
      let tarifRegistration: TarifRegistration = new TarifRegistration(type);
      this.localStorageService.set('tarifRegistration', tarifRegistration);
      this.router.navigate(['/hero']);
    }
}
