import{Component} from '@angular/core';

@Component({
  selector:'pm-root', //el nombre de nuestro componente cuando lo usemos como una directiva en html, este es el root , para agregar otra propiedad 
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
  <a class='navbar-brand'>{{pageTitle}}</a>
  <ul class= 'nav nav-pills'>
    <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
    <li><a class='nav-link' [routerLink]="['/products']">Product List</a></li>
  </ul>
  </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  ` 
})
export class AppComponent {
  pageTitle : string = 'Acme Product Management';
}