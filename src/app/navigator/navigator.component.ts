import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { LocalStorageService } from 'angular-2-local-storage';
import { TarifRegistration } from '../tarifRegistration';
import { Consts } from '../consts';
@Component({
    selector: 'my-navigator',
    templateUrl: './navigator.component.html'
})

export class NavigatorComponent implements OnInit {
  @Input() page: number;
    tarifRegistration: any;
    constructor(
      private router: Router,
      private localStorageService: LocalStorageService,
      private Consts: Consts
    ) {

    }

    ngOnInit(): void {
      this.tarifRegistration = this.localStorageService.get(Consts.KEY_TARIF_REGISTRATION);
    }



}
