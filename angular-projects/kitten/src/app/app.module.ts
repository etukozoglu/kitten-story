import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { KittenComponent } from './kitten/kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    KittenComponent,
    ListKittenComponent,
    UserKittenComponent,
    CreateKittenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
