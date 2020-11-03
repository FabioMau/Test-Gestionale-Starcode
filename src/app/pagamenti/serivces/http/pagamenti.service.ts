import { Injectable } from '@angular/core';
import { Pagamento } from '../pagamento.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagamentiService {

  constructor(private http: HttpClient) { }

  async getPagamenti() {
    return this.http.get<Pagamento[]>("https://test-sqlext.ew.r.appspot.com/pagamenti")
  }


}
