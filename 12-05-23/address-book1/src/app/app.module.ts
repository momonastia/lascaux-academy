import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { UserInitialsPipe } from './pipes/user-initials.pipe';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HttpResponseInterceptor } from './interceptors/http-response.interceptor';
import { HeaderInterceptor } from './interceptors/header.interceptor';
import { UrlInterceptor } from './interceptors/url.interceptor';
import { TimeInterceptor } from './interceptors/time.interceptor';
import { AddContactComponent } from './add-contact/add-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FilterProductsComponent } from './components/filter-products/filter-products.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { AddContactReactComponent } from './add-contact-react/add-contact-react.component';
import { FocusDirective } from './directives/focus.directive';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ContactListComponent,
    ContactDetailsComponent,
    UserInitialsPipe,
    ProductsListComponent,
    AddContactComponent,
    GlobalErrorComponent,
    FilterProductsComponent,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent,

    AddContactReactComponent,
      FocusDirective,
      ProductPageComponent,
      AboutPageComponent,
      NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
