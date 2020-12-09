import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChatComponent } from './chat/chat.component';
import { ContainerComponent } from './container/container.component';
import { DatosComponent } from './datos/datos.component';
import {​​​ Routes, RouterModule }​​​​​​​​​​ from '@angular/router';

const rutas: Routes = [
  {path: "", component: ContainerComponent}​​​​​​​​​​​​​​​​​​​​​,{path: "datos",component: DatosComponent}​​​​​​​
];

RouterModule.forRoot(rutas)

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ChatComponent, ContainerComponent, DatosComponent ],
  bootstrap:    [ AppComponent ],  
})
export class AppModule {}
