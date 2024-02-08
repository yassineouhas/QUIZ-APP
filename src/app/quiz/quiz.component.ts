import { Component ,OnInit } from '@angular/core';
import { QuestionService } from './../service/question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent  implements OnInit{
  formData: any = {
    "questionText": "Which of the following does TypeScript use to specify types?",
    "options": [
      {
        "text": ":",
        "correct": true
      },
      {
        "text": ";"
      },
      {
        "text": "!"
      },
      {
        "text": "&"
      }
    ],
    "explanation": "TS uses a colon (:) to separate the property name from the property type"
  }; 


  onSubmit() {
    
    this.questionService.postQuestionJson(this.formData).subscribe(response => {
      console.log('Response:', response);
      // Handle response as needed
    }, error => {
      console.error('Error:', error);
      // Handle error as needed
    });
  }

  constructor(private questionService: QuestionService) {}
  ngOnInit(): void { }
 
 

}
