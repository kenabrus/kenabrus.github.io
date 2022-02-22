import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  text : string = 'aaalasd';
  @Input() product: Product | undefined;
  @Input() item = '';

  constructor() { }

  ngOnInit(): void {
  }

}
