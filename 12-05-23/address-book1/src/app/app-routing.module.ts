import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { TypeCheckGuard } from './guards/type-check.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/contacts",
    pathMatch: "full",
  },
  {
    path: "contacts",
    component: ContactListComponent,
  },
  {
    path: "contact/:id",
    canActivate: [TypeCheckGuard],
    component: ContactDetailsComponent,
  },
  {
    path: "products",
    component: ProductsListComponent,
  },
  {
    path: "**",
    redirectTo: "contacts",
    pathMatch: "full",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
