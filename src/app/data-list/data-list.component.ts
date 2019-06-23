import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from  "@angular/common/http";

class Model {
  id : number;
  date: string;
  text: string;
}

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  public dataObservable: Observable<Model[]>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  	this.dataObservable = this.http.get<Model[]>("http://127.0.0.1:3000/data");
  }

}
