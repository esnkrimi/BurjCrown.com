import { Component, Input, OnInit } from '@angular/core';
import { globals } from '@bc/global-variables';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.sass']
})

export class ThumbnailComponent implements OnInit {
  @Input() data;
  @Input() type;
  @Input() wishlist;
  
  showType = 'smallIcon';
  hover = false;
  chips = true;
  constructor(public globals: globals,private ApiService:ApiService) { }

  ngOnInit(): void {
  }

  addToWishList(productId) { 
    let isProductInWishlistNow = false;
    this.data.wishlist_exists === 1 ? isProductInWishlistNow = true : isProductInWishlistNow = false;
    this.data.wishlist_exists = this.data.wishlist_exists === 1 ? 0 : 1;
    this.ApiService.addToWishList(productId);
  }
}
