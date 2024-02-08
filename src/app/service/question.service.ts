import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private baseURL ="http://localhost:3000/questions";
  constructor(private http: HttpClient) {}

  // getQuestionJson() {
  //   return this.http.get<any>('assets/questions.json');
  // }
  getQuestionJson() {
    return this.http.get<any>(this.baseURL);
  }
  postQuestionJson(data: any) {
    return this.http.post<any>(this.baseURL,data);
  }
 
}
