import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemService } from 'src/app/item.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Input() cartItems: Map<Item, number> = new Map<Item, number>();
  @Output() onDecrease = new EventEmitter<Item>();
  @Output() onIncrease = new EventEmitter<Item>();

  decrease(item:Item){
    this.onDecrease.emit(item)
  }
  increase(item:Item){
    this.onIncrease.emit(item)
  }
}
