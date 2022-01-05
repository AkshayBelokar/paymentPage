import { Component } from '@angular/core';
import { FormGroup,FormControl,FormControlName,Validators } from '@angular/forms'
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'checkout';
  PaymentForm = new FormGroup({
    username : new FormControl('',[Validators.required,]),
    cardNumber : new FormControl('',[Validators.requiredTrue,Validators.pattern('^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$')]),

  })

  constructor(private paymentData : DataserviceService){}

  getUserFormData(data: any)
  {

  }

  get username_valid()
  {
    return this.PaymentForm.get('username');
  }

  get cardNumber_valid()
  {
    return this.PaymentForm.get('cardNumber');
  }

  get month_valid()
  {
    return this.PaymentForm.get('month');
  }

  get year_valid()
  {
    return this.PaymentForm.get('year');
  }

}
