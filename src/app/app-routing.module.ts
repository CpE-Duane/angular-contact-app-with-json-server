import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';

const routes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: 'add-contact', component: AddContactComponent},
  {path: 'update-contact/:id', component: UpdateContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
