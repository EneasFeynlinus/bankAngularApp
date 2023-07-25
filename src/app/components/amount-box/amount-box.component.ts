import { Component, OnInit } from '@angular/core';
import { AmountDataModel } from 'src/app/model/amountDataModel';

@Component({
  selector: 'app-amount-box',
  templateUrl: './amount-box.component.html',
  styleUrls: ['./amount-box.component.css'],
})
export class AmountBoxComponent implements OnInit {
  service: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  accountDetails: AmountDataModel = {
    amountValue: 0,
    limit: 0,
    totalAmount: 0,
  };

  getAmountValues() {
    this.service
      .getAccount()
      .subscribe((data: { account: { balance: any; limit: any } }) => {
        this.accountDetails.amountValue = data.account.balance;
        this.accountDetails.limit = data.account.limit;
        this.accountDetails.totalAmount =
          this.accountDetails.amountValue + this.accountDetails.limit;
      });
    console.log(this.accountDetails);
  }
}
