import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@services/api.service';
import { globals } from '@bc/global-variables'; 
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  count = 1;
  productsAlsoDiscovered;
  datas: { [key: string]: string } = {
    'title': 'service_etitle',
    'filterSex': 'sex',
    'filterColor': 'colour',
    'filterNature': 'nature',
    "filterBrand": "brands",
    'filterScentGroup': 'scentGroup',
    'filterScentType': 'dos_escent',
    'filterScent': 'scentExact',
    'filterSizeExists': 'sizeEx',
    'filterCountries': 'do_location',
    'filterPerfumer': 'perfumer',
    'filterPrice': 'do_price',
    'Sale': 'do_certificate'
  };
  images;
  subscribe = new Subscription;
  product;
  constructor(private route: ActivatedRoute, private router: Router, private ApiService: ApiService, public globals: globals) {}

  ngOnInit(): void { 
    this.productDetail();
  }

  productDetail(){
  this.globals.loading=true;
  window.scroll(0,0);
  this.product=[];
  this.route.params.subscribe(param => {
    this.ApiService.productDetail(param['productId'])
      .subscribe(product => {
        this.product = product;
        this.images = [
          this.globals.UrlHome + '/drm/users/1/' + product[0].do_id + '/1.jpg?t=',
          this.globals.UrlHome + '/drm/users/1/' + product[0].do_id + '/2.jpg?t=',
          this.globals.UrlHome + '/drm/users/1/' + product[0].do_id + '/3.jpg?t=',
        ];
        this.fetchAlsoDiscovered(param['productId'])
      });
  });
  }

  addToBasket(productId,count) {
    this.ApiService.addToBasket(productId,count).subscribe(data=>{
      this.productsAlsoDiscovered=data;
      this.router.navigate(["basket"]);
      this.globals.loading=false;
    });  
  }

  fetchAlsoDiscovered(do_id){
    this.ApiService.fetchAlsoDiscovered(do_id).subscribe(data=>{
      this.productsAlsoDiscovered=data;
      this.globals.loading=false;
    });
  }
}