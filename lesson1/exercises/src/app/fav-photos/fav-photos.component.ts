import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Mary\'s Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/119665493_10224587763667808_7248304298009123449_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=2EDEEIxscvwAX8b0l53&_nc_ht=scontent-ort2-1.xx&oh=e52aa8237d6beeb93d89b23259d47ca1&oe=5FA8CDFF';
  image3 = 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-0/p526x296/120772924_10224721943502220_2264488288300268807_o.jpg?_nc_cat=106&_nc_sid=8bfeb9&_nc_ohc=l3-f2Llb1ccAX9dXkiV&_nc_ht=scontent-ort2-1.xx&tp=6&oh=f6d378b1069b6a5de170050168434949&oe=5FA9BAFA';

  constructor() { }

  ngOnInit() {
  }

}