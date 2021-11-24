import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/profile/models/profile';
import { Experince } from 'src/app/profile/models/experince';
import { Education } from 'src/app/profile/models/education';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  api = '/api/profile/';
  postExperinceApi = '/api/profile/experience';
  postEducationApi = '/api/profile/education';

  constructor(private httpClient: HttpClient) {}
  getProfile(): Observable<any> {
    return this.httpClient.get(this.api);
  }
  createProfile(data: Profile): Observable<any> {
    return this.httpClient.post(this.api, data);
  }
  saveProfile(data: Profile): Observable<any> {
    return this.httpClient.post(this.api, data);
  }

  saveExperience(data: Experince): Observable<any> {
    return this.httpClient.post(this.postExperinceApi, data);
  }
  saveEducation(data: Education): Observable<any> {
    return this.httpClient.post(this.postEducationApi, data);
  }

  deleteExperience(id: string): Observable<any> {
    return this.httpClient.delete(this.postExperinceApi + '/' + id);
  }

  deleteEducation(id: string): Observable<any> {
    return this.httpClient.delete(this.postEducationApi + '/' + id);
  }

  getAllProfiles(): Observable<any> {
    return this.httpClient.get(this.api + '/all');
  }

  getProfileByUserId(id: any): Observable<any> {
    return this.httpClient.get(this.api + 'user/' + id);
  }
}
