//las importaciones externas
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

//importaciones internas
import { AppComponent } from './app.component';
import {WelcomeComponent} from './home/welcome.component';
import { ProductModule } from './products/product.module'

@NgModule({
  declarations: [
    AppComponent, //Angular puede encontrar el selector
    WelcomeComponent
  ],
  imports: [ //van los imports externos
    BrowserModule, //para que la aplicacion corra correctamente en l browser
    HttpClientModule,
    RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path: '**',redirectTo:'welcome',pathMatch:'full'}
    ]),
    ProductModule //feature module
  ],
  bootstrap: [AppComponent] ///nuestro startup component, cuando se carga empieza con este compoenente
})
export class AppModule { }
