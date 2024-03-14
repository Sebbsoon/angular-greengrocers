import { Component, EventEmitter, Output } from '@angular/core';
import { ItemService } from 'src/app/item.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  constructor(private itemService: ItemService) {}
  @Output('addToCart') addToCart = new EventEmitter<Item>();

  items = this.itemService.items;

  addToCartClicked(item: Item) {
    this.addToCart.emit(item);
  }
}
