import { Component ,OnInit } from '@angular/core';
import { QuestionService } from './../service/question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent  implements OnInit{
tt() {
this.formData.options.push({});
}
 
  formData: any = {"options": [ {
          "text": "",
          "correct": false
        },]};

  onSubmit() {
    console.log(this.formData);
    
    // this.questionService.postQuestionJson(this.formData).subscribe(response => {
    //   console.log('Response:', response);
    //   // Handle response as needed
    // }, error => {
    //   console.error('Error:', error);
    //   // Handle error as needed
    // });
  }

  constructor(private questionService: QuestionService) {}
  ngOnInit(): void { }
 
 

}
