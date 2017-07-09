import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import { LocalStorageService } from 'angular-2-local-storage';
import { TarifRegistration } from '../tarifRegistration';
import { Consts } from '../consts';
import {NgForm} from "@angular/forms";
import {VALIDATION_MESSAGE} from "./validation-messages";
@Component({
    selector: 'my-tarif-info',
    templateUrl: './tarifInfo.component.html'
})

export class TarifInfoComponent implements OnInit {
  tarifRegistration: any;
  passwordConfirmValue: string;
  @ViewChild('tarifInfoForm') currentForm: NgForm;
  tarifForm: NgForm;

    constructor(
      private router: Router,
      private localStorageService: LocalStorageService,
      private Consts: Consts
    ) { }

    ngOnInit(): void {
      this.tarifRegistration = this.localStorageService.get(Consts.KEY_TARIF_REGISTRATION);
      if (this.tarifRegistration == null) {
        this.router.navigate(['/tarifs']);
        return;
      } else if (!this.tarifRegistration.email) {
        this.router.navigate(['/tarifUser']);
      }
    }

    onSubmit(): void {
      this.localStorageService.set(Consts.KEY_TARIF_REGISTRATION, this.tarifRegistration);
      this.router.navigate(['/tarifSummary']);
    }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.tarifForm) { return; }
    this.tarifForm = this.currentForm;
    if (this.tarifForm) {
      this.tarifForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  /**
   * Is called after each form change. Validat forms and assign validation message
   * @param data
   */
  onValueChanged(data?: any) {
    if (!this.tarifForm) { return; }
    const form = this.tarifForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = [];
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = VALIDATION_MESSAGE[field];
        for (const key in control.errors) {
          this.formErrors[field].push(messages[key] + ' ');
        }
      }
    }
  }

  formErrors = {
    'name': '',
    'ico': '',
    'dic': '',
    'street': '',
    'psc': '',
    'city': '',
    'country': ''
  };

}
