import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class ArticulosServices{
    URL_ARTICULOS:string = "https://jsonplaceholder.typicode.com/posts";

    constructor(private ws:HttpClient){

    };
    public getArticulos(){
        return this.ws.get(this.URL_ARTICULOS);
    };
}