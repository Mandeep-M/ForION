import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  /*{
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },*/
  { path: 'profile',loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cap918', loadChildren: './cap918/cap918.module#Cap918PageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
