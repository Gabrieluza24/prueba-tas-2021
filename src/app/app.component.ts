import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webapp';
  products: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://my-json-server.typicode.com/TASNETWORK/Prueba-DJunior/db")
    .subscribe(
      resultado => {
        this.products = resultado;
      }
    );
  }

}
