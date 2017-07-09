import {Component, OnInit, ViewChild, OnChanges} from '@angular/core';
import {Router} from "@angular/router";
import { LocalStorageService } from 'angular-2-local-storage';
import { TarifRegistration } from '../tarifRegistration';
import { Consts } from '../consts';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Component({
    selector: 'my-tarif-summary',
    templateUrl: './tarifSummary.component.html'
})

export class TarifSummaryComponent implements OnInit {
  tarifRegistration: any;
  tarifs: any;
  tarifsPrice: any
  agreeValue: boolean = false;
  showError: boolean = false;


    constructor(
      private router: Router,
      private localStorageService: LocalStorageService,
      private Consts: Consts,
      private http: Http
    ) { }

    ngOnInit(): void {
      this.tarifRegistration = this.localStorageService.get(Consts.KEY_TARIF_REGISTRATION);
      if (this.tarifRegistration == null) {
        this.router.navigate(['/tarifs']);
        return;
      } else if (!this.tarifRegistration.email) {
        this.router.navigate(['/tarifUser']);
        return;
      } else if (!this.tarifRegistration.name) {
        this.router.navigate(['/tarifInfo']);
        return;
      }
      this.tarifs = Consts.TARIFS;
      this.tarifsPrice = Consts.TARIFS_PRICE;
    }

    onSubmit(): void {
      if (this.agreeValue) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let data = JSON.stringify(this.tarifRegistration);
        this.http.post(Consts.URL_SEND, data, {headers: headers}).toPromise()
          .then( () => {
            this.localStorageService.remove(Consts.KEY_TARIF_REGISTRATION);
            this.router.navigate(['/tarifs']);
          })
          .catch( () => {
            this.localStorageService.remove(Consts.KEY_TARIF_REGISTRATION);
            this.router.navigate(['/tarifs']);
          });
      } else {
        this.showError = true;
      }
    }

  onChange(): void {
    if (this.agreeValue) {
      this.showError = false;
    } else {
      this.showError = true;
    }
  }



}
