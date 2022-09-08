import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar) { }

  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',

 };
  ngOnInit(): void {
  }
formSubmit(){
  console.log(this.user);
  if(this.user.username=='' || this.user.username==null){
   // alert('User is required !!');
   this.snack.open('Username is required !!','',{
     duration:3000,
    //  verticalPosition:'top',
    //  horizontalPosition:'right'
   });
    return;
  }else if(this.user.password=='' || this.user.password==null){

    this.snack.open('password is required !!','',{
      duration:3000,
    });
    return;
  }else if(this.user.firstName=='' || this.user.firstName==null){

    this.snack.open('firstName is required !!','',{
      duration:3000,
    });
    return;
  }else if(this.user.lastName=='' || this.user.lastName==null){

    this.snack.open('lastName is required !!','',{
      duration:3000,
    });
    return;
  }else if(this.user.email=='' || this.user.email==null){

    this.snack.open('Email is required !!','',{
      duration:3000,
    });
    return;
  }else if(this.user.phone=='' || this.user.phone==null){

    this.snack.open('Phone is required !!','',{
      duration:3000,
    });
    return;
  }











// adduser funct
//(method) Observable<any>.subscribe(next?: ((value: any) => void) | null | undefined, 
//error?: ((error: any) => void) | null | undefined, 
//complete?: (() => void) | null | undefined):
this.userService.addUser(this.user).subscribe(
  (data:any)=>{
    //sucess
   console.log(data);
//alert('sucess');
   Swal.fire('Sucessfully done !!','user id is '+ data.id,'success');
  },
  (error:any)=>{
    //error
    console.log(error);
    //alert('something went wrong');
    this.snack.open('Something went Wrong !!','',{
      duration:3000,
    })
  } 
);

}
}