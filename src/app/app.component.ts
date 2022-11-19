import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'angular-public-api-fetch-w-pipe';
  apiData: any;
  apiData$: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): any {
    this.apiData$ = this.apiService.callApi()
    .pipe(tap((data) => {
     console.table(data);
    this.apiData = data;
    }));

  }
}
