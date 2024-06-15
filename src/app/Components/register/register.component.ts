import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  register(): void {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
      this.userService.registerUser(email, password).subscribe(
        (response) => {
          console.log('Registration successful:', response);
          this.router.navigate(['/verify'], { queryParams: { email } }); // Navigate to verify page after registration
        },
        (error) => {
          console.error('Registration error:', error);
          // Handle registration error (show error message, etc.)
        }
      );
    }
  }
}
