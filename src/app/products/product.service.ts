import {Injectable} from '@angular/core';
import {IProduct} from './product';
import {HttpClient, HttpErrorResponse, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Injectable({
    providedIn:'root'
})

export class ProductService{
    //se agrega la dependencia al constructor
    constructor(private http:HttpClient) {}

    //el url del servidor web
    private productUrl='api/products/products.json'; //no tenemos servidor asi que usamos esta direccion local

    getProducts() : Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data=>console.log('All: '+ JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    private handleError(err:HttpErrorResponse){

        //si tuvieramos un web server mandariamos por algo para logger en ves de loggear en la consola
        let errorMessage = '';

        if(err.error instanceof ErrorEvent){
            //Si ocurre un error del lado del cliemte o de red
            errorMessage = `An error ocurred : ${err.error.message};`
        }
        else{
            //si el error es en el backend, entonces respondera con el erro
            errorMessage =`Server returner code: ${err.status}, erro message is: ${err.message}`;
        }

        console.error(errorMessage);
        return throwError(errorMessage);
    }
}