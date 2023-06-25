import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserActiveComponent } from './user-active/user-active.component';
import { MenuActiveComponent } from './menu-active/menu-active.component';

const routes: Routes = [
  { path: 'user', component: UserActiveComponent },
  { path: 'menu', component: MenuActiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
