import { Injectable } from '@angular/core';
import { ClieForn } from '../clieforn.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClieFornService {

  constructor(private http: HttpClient) { }

  readClieForns() {
    return this.http.get<ClieForn[]>("https://test-sqlext.ew.r.appspot.com/clieforn")
  }

  /*readClieForn(id: number) {
    return this.http.get<ClieForn>("https://test-sqlext.ew.r.appspot.com/clieforn/" + id)
  }*/

  createClieForn(ClieForn: ClieForn) {
    return this.http.post<ClieForn>("https://test-sqlext.ew.r.appspot.com/clieforn", ClieForn)
  }

  /*updateClieForn(ClieForn: ClieForn) {
    return this.http.put<ClieForn>("https://test-sqlext.ew.r.appspot.com/clieforn/" + ClieForn.codice, ClieForn)
  }

  deleteClieForn(ClieForn: ClieForn) {
    return this.http.delete("https://test-sqlext.ew.r.appspot.com/clieforn/" + ClieForn.codice)
  }*/

}
