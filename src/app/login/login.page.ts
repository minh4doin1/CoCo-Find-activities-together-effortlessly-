import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  selectedOption: string = '';

  constructor() { }

  selectOption(option: string) {
    this.selectedOption = option;
  }
}
