import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';

const routes: Routes = [
  { path: 'create', component: CreateKittenComponent },
  { path: 'list', component: ListKittenComponent },
  { path: 'user', component: UserKittenComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
