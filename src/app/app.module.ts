import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { QuizComponent } from './quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { FormsModule } from "@angular/forms";
import { OptionListComponent } from './option-list/option-list.component'; // Import OptionListModule
// Import from library
import {
  NgxAwesomePopupModule,
  DialogConfigModule,
  ConfirmBoxConfigModule,
  ToastNotificationConfigModule
} from '@costlydeveloper/ngx-awesome-popup';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionComponent,
    QuizComponent,
    HeaderComponent,
    ChangeBgDirective,
    OptionListComponent
  ],
  imports: [BrowserModule,
    NgxAwesomePopupModule.forRoot(), // Essential, mandatory main module.
        DialogConfigModule.forRoot(), // Needed for instantiating dynamic components.
        ConfirmBoxConfigModule.forRoot(), // Needed for instantiating confirm boxes.
        ToastNotificationConfigModule.forRoot(),
         AppRoutingModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}