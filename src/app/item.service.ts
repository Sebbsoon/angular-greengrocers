import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Item } from './models/item';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  http = inject(HttpClient);
  
  get items(): Promise<Item[]> {
    // @ts-ignore
    return firstValueFrom(this.http.get(`${environment.apiUrl}groceries`));
  }

  private cartSubject = new BehaviorSubject<Map<Item, number>>(new Map());

  get cart(): Map<Item, number> {
    return this.cartSubject.getValue();
  }

  addToCart(item: Item) {
    const currentCart = new Map(this.cartSubject.getValue());
    const quantity = currentCart.get(item) || 0;
    currentCart.set(item, quantity + 1);
    this.cartSubject.next(currentCart);
  }
}
