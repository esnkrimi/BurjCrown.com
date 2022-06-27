import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.sass'],
})
export class WishlistComponent implements OnInit {
  data;
  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.fetchWishlist();
  }
  fetchWishlist(){
    this.data=this.ApiService.fetchWishlist();
  }
}