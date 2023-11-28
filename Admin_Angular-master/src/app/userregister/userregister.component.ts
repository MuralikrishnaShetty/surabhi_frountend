import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../classes/user';
import { ChangeUserService } from '../services/change-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})

export class UserregisterComponent {
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private changeUser: ChangeUserService,
    private router: Router
  ) {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]],
      password: ['', [Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
    });
  }
  isTouched(controlName: string): boolean {
    const control = this.userForm.get(controlName);
    return control?.touched || false;
  }

  addUser(): void {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      console.log(userData);

      this.changeUser.addUser(userData).subscribe(
        (res) => {
          this.router.navigate(['/login']);
            alert('Registration successful!');
          console.log('Added successfully', res);
          // this.router.navigate(['/userlist']);
          // Handle success, if needed
        },
        (error) => {
          console.error('Error updating data', error);
          // Handle error, if needed
        }
      );
    } else {
      // Handle the case where the form is not valid
      console.log("enter the valid details");
    }
  }
}
