import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserActiveComponent } from './user-active/user-active.component';

const routes: Routes = [
  { path: 'user', component: UserActiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
