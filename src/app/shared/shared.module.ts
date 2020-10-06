import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StarComponent,
    CommonModule,
    FormsModule  //no se necesita importar para exportarlo
  ]
})
export class SharedModule { }
