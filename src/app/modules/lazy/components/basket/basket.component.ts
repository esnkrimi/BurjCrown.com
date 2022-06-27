import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { globals } from '@bc/global-variables'

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html', 
  styleUrls: ['./basket.component.sass']
})
export class BasketComponent implements OnInit {
  rows: { [key: string]: string } = {
    'filterPrice': 'price_after',
    'count': 'basket_count',
  };
  basketData;
  finalPrice=0;
  sum=0;
  constructor(private ApiService: ApiService,public globals: globals) { }

  ngOnInit(): void {
    this.userBasketlist();
  }

  userBasketlist(){
    this.ApiService.userBasketlist().subscribe(data=>{
      this.basketData=data;
    });

  }

  deleteFromBasket(basket_id){
    this.ApiService.deleteFromBasket(basket_id);
    this.userBasketlist();
  }
}
