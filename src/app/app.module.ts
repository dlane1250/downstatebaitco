import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PagesService } from './common/services/pages.service';
import { ProductsService } from './common/services/products.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { CreateProductComponent } from "./product-list/create-product/create-product.component";
import { FooterComponent } from './footer/footer.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { EventsComponent } from './pages/events/events.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { QuantityComponent } from './product-list/quantity/quantity.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    MenuComponent,
    FavoriteComponent,
    FooterComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    ChangePasswordComponent,
    ReviewsComponent,
    HomeComponent,
    ProductsPageComponent,
    EventsComponent,
    AboutComponent,
    CheckoutComponent,
    ContactComponent,
    CartComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    ProductListComponent,
    QuantityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'pages/home', component: HomeComponent },
      { path: 'pages/products-page', component: ProductsPageComponent },
      { path: 'pages/events', component: EventsComponent },
      { path: 'pages/about', component: AboutComponent },
      { path: 'pages/contact', component: ContactComponent },
      { path: 'pages/cart', component: CartComponent }
    ])
  ],
  providers: [
    PagesService,
    ProductsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
