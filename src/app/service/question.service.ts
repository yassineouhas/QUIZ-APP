import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  getQuestionJson() {
    return this.http.get<any>('assets/questions.json');
  }
  postQuestionJson(data: any) {
   
    return this.http.post<any>('assets/questions.json',data);
  }
 
}
