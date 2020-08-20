import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  http: any;

  constructor(private httpClient: HttpClient) {}

  getGame(id :number)  {
    ///console.log("Movie Data Requested");
    return this.httpClient.get("https://localhost:44320/api/Games/" + id);
  }


}
