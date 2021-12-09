import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ColDef } from 'ag-grid-community';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  columnDefs: ColDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' },
  ];

  rowData: Observable<any[]>;
  constructor(private http: HttpClient) {
    this.rowData = this.http.get<any[]>('https://gorest.co.in/public/v1/users');
  }
}
