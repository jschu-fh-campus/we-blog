import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }

  title = 'Login';
  form = new FormGroup({});
  model: User = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      className: 'd-block mt-2',
      templateOptions: {
        label: 'Username',
        required: true,
      }
    },
    // {
    //   key: 'email',
    //   type: 'input',
    //   className: 'd-block mt-2',
    //   templateOptions: {
    //     label: 'E-Mail',
    //     required: true,
    //   }
    // },
    {
      key: 'password',
      type: 'input',
      className: 'd-block mt-2',
      templateOptions: {
        label: 'Passwort',
        type: 'password',
        required: true,
      }
    }
  ];

  login(model: User): void {
    console.log(model);
  }
}
