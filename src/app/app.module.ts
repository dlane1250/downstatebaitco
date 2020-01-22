import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsService } from './products/products.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { ProductComponent } from './product/product.component';
import { QuantityComponent } from './quantity/quantity.component';
import { FooterComponent } from './footer/footer.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    MenuComponent,
    FavoriteComponent,
    ProductComponent,
    QuantityComponent,
    FooterComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    ChangePasswordComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
