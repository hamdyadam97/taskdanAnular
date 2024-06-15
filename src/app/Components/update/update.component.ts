import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  updateForm: FormGroup;
  currentStep = 'phone'; // Initial step

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.updateForm = this.fb.group({
      phoneNumber: ['', Validators.required],
      phoneCountryCode: ['', Validators.required],
      fullName: ['', Validators.required],
      newPassword: ['', Validators.required]
      // Add other form controls as needed
    });
  }

  ngOnInit(): void {
  }

  nextStep(): void {
    // Logic to navigate to next step
    if (this.currentStep === 'phone') {
      this.currentStep = 'namePassword';
    } else if (this.currentStep === 'namePassword') {
      // Navigate to next step or complete update process
    }
  }

  update(): void {
    if (this.updateForm.valid) {
      const userId = ''; // Retrieve current user ID
      const userDetails = this.updateForm.value;
      this.userService.updateUserDetails(userId, userDetails).subscribe(
        response => {
          console.log('User details updated successfully:', response);
          // Handle success (navigate to profile page, show success message, etc.)
        },
        error => {
          console.error('Update error:', error);
          // Handle update error (show error message, etc.)
        }
      );
    }
  }
}
