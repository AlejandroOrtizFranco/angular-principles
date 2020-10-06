import { Component, OnInit, ValueProvider } from '@angular/core';
import { IProduct } from '../product'; //dos puntos porque estamos en otra carpeta
import {ActivatedRoute, Router} from '@angular/router'


@Component({
  selector: 'pm-product-detail', //esto sirve solo si sera nesteado en otro componente
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    //el + convierte el param string a un numeric ID
  }
  onBack() : void{
    this.router.navigate(['/products']);
  }

}
