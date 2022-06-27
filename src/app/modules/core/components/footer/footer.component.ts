import { Component, OnInit } from '@angular/core';
import { globals } from '@bc/global-variables';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  index=[0,1,2]
  dataNewProduct;
  dataTopProduct;
  dataBestProduct;
  dataSets=['New','Top','Best'];
  data;
  constructor(public globals: globals, private ApiService: ApiService) { 
    this.data=[this.dataNewProduct,this.dataTopProduct,this.dataBestProduct];
  }

  ngOnInit(): void {
    this.dataNewProduct=this.getOrdersProducts("do_id desc",0);
    this.dataTopProduct=this.getOrdersProducts("do_look desc",1);
    this.dataBestProduct=this.getOrdersProducts("do_certificate desc",2);
  }

  getOrdersProducts(sort,index) {
    const LENGHT_OF_ITEMS_TO_SHOW = 5;
    return this.ApiService.getOrdersProducts(sort, LENGHT_OF_ITEMS_TO_SHOW);
  }
}