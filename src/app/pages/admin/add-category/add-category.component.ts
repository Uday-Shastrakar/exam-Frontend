import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category={
    title:'',
    description:'',
 };

  constructor(private _category:CategoryService,private _snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.category.title.trim()=='' || this.category.title==null){
      this._snack.open("Title Required !!",'',{
         duration:3000
      })
      return;
    }
    this._category.addCategory(this.category).subscribe(
     (data:any)=>{
      this.category.title=''
      this.category.description=''
      swal.fire("Sucess !!",'category is added sucessfuly','success');
     },
      (error)=>{
        console.log(error);
        swal.fire("Error !!",'Server errror !!','error');
      }
      );
    
  }

}
