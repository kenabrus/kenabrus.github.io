import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../Product';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product | undefined;
  @Output() onDeleteProduct: EventEmitter<Product> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(product: Product) {
    this.onDeleteProduct.emit(product);
  }

}
