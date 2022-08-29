import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http:HttpClient) { }
//get question (Admin)
  public getQuestionsOfQuiz(qid:any){
   return this._http.get(`${baseUrl}/question/quiz/all/${qid}`);
  }

  //get questions for test(Normal user)
  public getQuestionsOfQuizForTest(qid:any){
    return this._http.get(`${baseUrl}/question/quiz/${qid}`);
   }

 // add question
 public addQuestion(question:any){
  return this._http.post(`${baseUrl}/question/`,question);
 }
//delete question
public deleteQuestion(questionId:any){
  return this._http.delete(`${baseUrl}/question/${questionId}`);
}
//update quiz question
public updateQuestion(questionUp:any){
  return this._http.put(`${baseUrl}/question/`,questionUp);
}

//eval  quiz question
public evalQuiz(questions:any){
return this._http.post(`${baseUrl}/question/eval-quiz`,questions)
}

}
