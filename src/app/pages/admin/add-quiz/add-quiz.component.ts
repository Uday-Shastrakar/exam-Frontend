import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  categories: any = [];

  quizData = {
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: true,
    category: {
      cid: '',
    },

  };
  constructor(private _cat: CategoryService, private _snack: MatSnackBar, private _quiz: QuizService) { }

  ngOnInit(): void {

    this._cat.categories().subscribe(
      (data: any) => {
        //categories load
        this.categories = data;
        console.log(this.categories);

      },

      (error) => {
        console.log(error);
        swal.fire('Error !!', 'error in loading data from server', 'error');
      }

    );
  }

  //adding quiz
  addQuiz() {
    // console.log(this.quizData);
    if (this.quizData.title.trim() == '' || this.quizData.title == null) {
      this._snack.open("Title Required !!", '', {
        duration: 3000,
      });
      return;
    }
    //validation..

    //call server
    this._quiz.aadQuiz(this.quizData).subscribe(
      (data) => {
        swal.fire('Success', 'quiz is added', 'success')
        this.quizData = {
          title: '',
          description: '',
          maxMarks: '',
          numberOfQuestions: '',
          active: true,
          category: {
            cid: '',
          },

        };

      },
      (error)=>{
        swal.fire('Error !!','Error while adding quiz','error')
        console.log();
      }
    );

  }

}
