import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service'

@Component({ //nuestro componente que define nuestra metada: selector y nuestro view(template)
    selector: 'pm-products',  //pm-root se puede usar como directiva en cualquier otro componente
    templateUrl: './product-list.component.html', //como esta en el mismo folder solo le ponemos ./
    styleUrls : ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {
   
    //nuestra clase asociada a este componente para que puedan acceder los demas
    pageTitle: string = 'Product List!';
    imageWidth : number = 50;
    imageMargin = 2;
    showImage : boolean = false;
    errorMessage:string;

    //Getter and setter
    _listFilter: string;
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts=this.listFilter? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts:IProduct[];

    products: IProduct[]=[];

    //tiene que inicializarse con algo
    constructor(private productService : ProductService) {
        
        
    }

    onRatingClicked(message: string):void{ //recibe un strink porque el eventraiser recibe un string
        this.pageTitle = 'Product List: ' + message;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy.toLocaleLowerCase();//lo pasamos a miniscula para poder comparlos correctamente
        return this.products.filter((product:IProduct)=>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !==-1);
    }

    

    ngOnInit(): void {
        //aqui se ejecutara al inicio
        //este se subscribe porque este es quien llama al servicio
        this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;///se movio el filtro aca, porque en el constructor se ejecutaria primero
                ///y no queremos que filtre antes de que haya productos  
            },
            error: err=> this.errorMessage=err
        }); 
       
    }
}