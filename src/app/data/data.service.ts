import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as dataJobs from './jobs.json';
import * as dataTechnologies from './techno.json';
import * as dataProject from './project.json';


import { ModelSkill } from '../models/ModelSkill.models';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  listJobs: any = dataJobs;
  listTechnologies: any = dataTechnologies;
  listProject: any = dataProject;
  constructor(private http: HttpClient) { }
  getLocalData(): Observable<any> {
    return this.http.get('./ techno.json');
  }
  getTechnologies(): Observable<any> {
    return this.http.get('./ techno.json');

  }
  getProjects() {
    return dataProject;
  }
  getJobs() {
    return dataJobs;
  }
}
