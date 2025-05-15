import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  message: string
}
