import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm : FormGroup;
  user : User ;
  userSubmitted:boolean;
  constructor( private fb :FormBuilder, private userService : UserService) { }

  ngOnInit(): void {
    // this.registrationForm = new FormGroup({
    //   userName : new FormControl('Mark', Validators.required),
    //   email : new FormControl(null,[Validators.email,Validators.required]),
    //   password : new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //   confirmPassword : new FormControl(null,[Validators.required]),
    //   mobile : new FormControl(null,[Validators.required,Validators.minLength(10)])
    // },this.passwordMatchingValidator);
    this.createRegistrationForm();
  }

  get userName()
  {
    return this.registrationForm.get('userName') as FormControl;
  }
  get password()
  {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword()
  {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get email()
  {
    return this.registrationForm.get('email') as FormControl;
  }
  get mobile()
  {
    return this.registrationForm.get('mobile') as FormControl;
  }

  createRegistrationForm()
  {
    this.registrationForm = this.fb.group({
      userName : [null,Validators.required],
      email : [null,[Validators.email,Validators.required]],
      password : [null,[Validators.required,Validators.minLength(8)]],
      confirmPassword : [null,Validators.required],
      mobile : [null,[Validators.required,Validators.minLength(10)]]
    },{Validators : this.passwordMatchingValidator});
  }

  passwordMatchingValidator(fg:FormGroup): Validators
  {
    return fg.get("password").value === fg.get("confirmPassword").value ? null : {
      notMatched:true
    };
  }

  userData() : User{
    return this.user = {
      userName : this.userName.value,
      email : this.email.value,
      password : this.password.value,
      mobile : this.mobile.value
    };
  }

  onSubmit()
  {
    console.log(this.registrationForm);
    this.userSubmitted = true;
    if(this.registrationForm.valid)
    {
      //this.user = Object.assign(this.user,this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
    }
  }
}
