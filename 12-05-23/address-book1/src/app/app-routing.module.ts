import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/contacts",
    pathMatch: "full",
  },
  {
    path: "contacts",
    component: ContactListComponent,
    children: [
      {
        path: ":id",
        component: ContactDetailsComponent,
      },
    ],
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
