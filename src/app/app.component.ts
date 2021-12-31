import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { LoginFormService, Kunde } from './login-form.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Login';
  form = new FormGroup({});
  fields: FormlyFieldConfig[];
  model: User;
  kunden = Kunde;

  private kunde$ = new BehaviorSubject(Kunde.kunde1);
  private destroy$ = new Subject<boolean>();

  constructor(private loginFormService: LoginFormService) {
  }

  ngOnInit(): void {
    this.kunde$
      .pipe(
        switchMap((kunde) => this.loginFormService.getFields(kunde)),
        takeUntil(this.destroy$)
      )
      .subscribe(fields => {
        this.model = {};
        this.fields = fields;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  login(model: User): void {
    console.log(model);
  }

  changeKunde(kunde: Kunde): void {
    this.kunde$.next(kunde);
  }
}
