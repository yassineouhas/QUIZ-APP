// quiz.component.ts

import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../service/question.service'; 
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  formData: any = { "options": [{ "text": "", "correct": false }] };

  constructor(private toastEvokeService: ToastEvokeService,private questionService: QuestionService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.formData);

    this.questionService.postQuestionJson(this.formData).subscribe(response => {
      // Ngx Awesome Popup 
      this.toastEvokeService.success('I am title!', 'I am a message!').subscribe();
      console.log('Response:', response);
      // Handle response as needed
      this.formData={ "options": [{ "text": "", "correct": false }] };

    }, error => {
      console.error('Error:', error);
      // Handle error as needed
    });
  }

  addOption() {
    this.formData.options.push({ "text": "", "correct": false });
  }

  trackByFn(index: any, item: any) {
    return index;
  }
  deleteOption(index: number) {
    this.formData.options.splice(index, 1);
  }
}
