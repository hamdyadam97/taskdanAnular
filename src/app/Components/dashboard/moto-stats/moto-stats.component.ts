import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-moto-stats',
  standalone: true,
  imports: [SideMenuComponent],
  templateUrl: './moto-stats.component.html',
  styleUrl: './moto-stats.component.css'
})
export class MotoStatsComponent {
  stats = {
    available_motos: 0,
    motos_bought_this_month: 0
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any>('https://localhost:7090/api/MotoStats', { headers })
      .subscribe(
        (response) => {
          this.stats = response;
        },
        (error) => {
          console.error('Error fetching moto stats:', error);
        }
      );
  }

}
