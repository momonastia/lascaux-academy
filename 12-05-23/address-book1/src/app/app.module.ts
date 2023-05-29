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
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ContactListComponent,
    ContactDetailsComponent,
    UserInitialsPipe,
    ProductsListComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
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
