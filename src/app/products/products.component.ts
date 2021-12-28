import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any;
  categories: any;

  constructor(private http: HttpClient) { }

  filterProduct ='';


  ngOnInit() {
    this.http.get("https://my-json-server.typicode.com/TASNETWORK/Prueba-DJunior/db")
    .subscribe(
      resultado => {
        this.products = resultado;
        this.categories = resultado;
      }
    );
  }


}


