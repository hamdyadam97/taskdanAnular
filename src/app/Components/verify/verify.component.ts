import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.css',
})
export class VerifyComponent implements OnInit {
  verifyForm: FormGroup;
  email: string='email';
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.verifyForm = this.fb.group({
      verificationCode: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
    });
  }

  verify(): void {
    if (this.verifyForm.valid) {
      // Replace with actual current user retrieval
      const { verificationCode } = this.verifyForm.value;
      this.userService.verifyEmail(this.email, verificationCode).subscribe(
        (response) => {
          console.log('Email verification successful:', response);
          this.router.navigate(['/update']); // Navigate to update page after verification
        },
        (error) => {
          console.error('Email verification error:', error);
          // Handle verification error (show error message, etc.)
        }
      );
    }
  }
}
