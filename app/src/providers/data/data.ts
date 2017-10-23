import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

  constructor(public http: Http, public storage: Storage) {}

  getData() {
    return this.storage.get('todos');
  }

  save(data) {
    this.storage.set('todos', data);
  }

}
