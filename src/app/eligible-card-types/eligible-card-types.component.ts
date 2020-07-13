import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eligible-card-types',
  templateUrl: './eligible-card-types.component.html',
  styleUrls: ['./eligible-card-types.component.css']
})
export class EligibleCardTypesComponent {
  public cardData : EligibleCardData;
    constructor(public HttpClient: HttpClient, private _router: Router) {
      const navigation = _router.getCurrentNavigation();
      if (navigation.previousNavigation == null) {
        this._router.navigate(['/home']);
      };
      const cardDetails = navigation.extras as {
        cardId: string,
        name: string,
        promotionalMessage: string,
        apr: number
      };
      this.cardData = cardDetails;
    }
}

interface EligibleCardData {
  cardId: string;
  name: string;
  promotionalMessage: string;
  apr: number;
 }
