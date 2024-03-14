import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { StoreComponent } from './item/store/store.component';
import { CartComponent } from './item/cart/cart.component';
import { TotalComponent } from './item/total/total.component';

@NgModule({
  declarations: [AppComponent, StoreComponent, CartComponent, TotalComponent],
  imports: [BrowserModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

  
}
