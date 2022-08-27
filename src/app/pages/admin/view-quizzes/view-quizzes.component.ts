import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
   quizzes:any=[];

  constructor(private _quiz:QuizService ) { }

  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
        console.log(this.quizzes);
      },
      
        (error)=>{
        console.log(error); 
        swal.fire('Error !!','Error in loading data !','error');
      }
         
      );
  }
//
deleteQuiz(qId:any){
swal.fire({
  icon:'info',
title:"Are you sure ?",
confirmButtonText: 'Delete',
showCancelButton: true,
}).then((result)=>{
  if(result.isConfirmed){
    //delete
    this._quiz.deleteQuiz(qId).subscribe(
          (data:any)=>{
          // this.quizzes =this.quizzes.filter((quiz:any)=>quiz.qId!=qId);
          swal.fire('Success','Quiz deleted','success');
          this.ngOnInit();
        },
        (error:any)=>{
          swal.fire('Error','Error in deleting Quiz ','error');
        }
        );
  }
})
}

}
