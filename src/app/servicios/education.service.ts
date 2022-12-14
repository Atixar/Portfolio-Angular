import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private apiServerUrl = 'https://portfolioback-ah2t.onrender.com';
  constructor(private http: HttpClient) {}

  public getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.apiServerUrl}/api/education/all`);
  }
  public addEducation(education: Education): Observable<Education> {
    return this.http.post<Education>(
      `${this.apiServerUrl}/api/education/add`,
      education
    );
  }

  public updateEducation(education: Education): Observable<Education> {
    return this.http.put<Education>(
      `${this.apiServerUrl}/api/education/update`,
      education
    );
  }
  public deleteEducation(educationId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/api/education/delete/${educationId}`
    );
  }
}
