import { Component, inject } from '@angular/core';
import { ItemService } from './item.service';
import { StoreComponent } from './item/store/store.component';
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-green-grocers';
  cart: Map<Item, number> = new Map<Item, number>();
  total: number = 0;
  onAddToCart(item: Item) {
    const quantity = this.cart.get(item) || 0;
    this.cart.set(item, quantity + 1);
    this.total = +(this.total + item.price).toFixed(2);
  }
  onIncrease(item: Item) {
    this.cart.set(item, (this.cart.get(item) || 0) + 1);
    this.total = +(this.total + item.price).toFixed(2);
  }
  onDecrease(item: Item) {
    const currentQuantity = this.cart.get(item) ?? 0;
    if (currentQuantity <= 1) {
      this.cart.delete(item);
      this.total = +(this.total - item.price).toFixed(2);

    } else {
      this.cart.set(item, (this.cart.get(item) || 0) - 1);
      this.total = +(this.total - item.price).toFixed(2);
    }
  }
}
