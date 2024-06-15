import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SideMenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  data: any;
  loading: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any>('https://localhost:7090/api/User/client', { headers })
      .subscribe(
        (response) => {
          this.data = response;
          this.loading = false;
        },
        (error) => {
          console.error('Error fetching dashboard data:', error);
          this.loading = false;
        }
      );
  }

}
