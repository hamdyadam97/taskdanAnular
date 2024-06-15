import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:7090/api'; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  registerUser(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/User/register`, { email, password });
  }

  verifyEmail(email: string, verificationCode: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/User/verify-email`, {
      email,
      verificationCode,
    });
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`/${this.baseUrl}'/User`);
  }

  updateUserDetails(userId: string, userDetails: any): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/User/${userId}/update-details`,
      userDetails
    );
  }
}
