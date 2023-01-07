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
<<<<<<< HEAD
    return this.http.get<Education[]>(
      `${this.apiServerUrl}/educacion/api//all`
    );
  }
  public addEducation(education: Education): Observable<Education> {
    return this.http.post<Education>(
      `${this.apiServerUrl}/educacion/api/add`,
=======
    return this.http.get<Education[]>(`${this.apiServerUrl}/api/educacion/all`);
  }
  public addEducation(education: Education): Observable<Education> {
    return this.http.post<Education>(
      `${this.apiServerUrl}/api/educacion/add`,
>>>>>>> cf9c5db78b605eba33a8ed1ac9c6a9d2a4b68abb
      education
    );
  }
  public updateEducation(education: Education): Observable<Education> {
    return this.http.put<Education>(
      `${this.apiServerUrl}/educacion/api/update`,
      education
    );
  }
  public deleteEducation(educationId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/educacion/api/delete/${educationId}`
    );
  }
}
