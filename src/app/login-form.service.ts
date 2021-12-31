import { Injectable } from "@angular/core";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { Observable, of } from "rxjs";

export enum Kunde {
  kunde1,
  kunde2
}

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  public getFields(kunde: Kunde): Observable<FormlyFieldConfig[]> {
    switch(kunde) {
      case Kunde.kunde1:
        return of([
          this.getUsernameField(),
          this.getPasswordField()
        ]);
      case Kunde.kunde2:
        return of([
          this.getEmailField(),
          this.getPasswordField()
        ]);
    }
  }

  private getUsernameField(): FormlyFieldConfig {
    return {
      key: 'username',
      type: 'input',
      className: 'd-block mt-2',
      templateOptions: {
        label: 'Username',
        required: true,
      }
    };
  }

  private getEmailField(): FormlyFieldConfig {
    return {
      key: 'email',
      type: 'input',
      className: 'd-block mt-2',
      templateOptions: {
        label: 'E-Mail',
        required: true,
      }
    };
  }

  private getPasswordField(): FormlyFieldConfig {
    return {
      key: 'password',
      type: 'input',
      className: 'd-block mt-2',
      templateOptions: {
        label: 'Passwort',
        type: 'password',
        required: true,
      }
    };
  }
}
