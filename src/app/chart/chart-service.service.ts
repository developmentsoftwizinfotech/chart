import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {
  private chartDataUrl = 'http://localhost:4200/assets/chart-data.json'; 
  constructor(private http:HttpClient) { }
  getChartData(): Observable<any> {
    console.log(this.chartDataUrl)
    return this.http.get<any>(this.chartDataUrl);
  
  }
}
