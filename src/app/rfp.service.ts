import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RfpService {
  private aiEndpoint = 'https://api.example.com/generate-rfp'; // Placeholder URL

  constructor(private http: HttpClient) {}

  generateRfp(projectSummary: string): Observable<any> {
    // Example body, adjust according to your API's requirements
    const requestBody = { projectSummary: projectSummary };
    return this.http.post<any>(this.aiEndpoint, requestBody);
  }
}
