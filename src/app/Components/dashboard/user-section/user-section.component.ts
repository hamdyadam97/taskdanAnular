import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-user-section',
  standalone: true,
  imports: [SideMenuComponent],
  templateUrl: './user-section.component.html',
  styleUrl: './user-section.component.css',
})
export class UserSectionComponent {
  users: any[] = [];
  selectedUser: any = null;
  displayContent: any = null;
  show: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe(
      (response: any[]) => {
        this.show = true;
        this.users = response;
      },
      (error) => {
        this.show = true;
        console.error('Error fetching users:', error);
      }
    );
  }

  handleUserClick(user: any): void {
    this.selectedUser = user;
    this.displayContent = null;
  }

  handleFileClick(): void {
    this.show = false;
    if (this.selectedUser && this.selectedUser.file) {
      this.displayContent = `
        <div>
          <h2>File Name:</h2>
          <p>${this.selectedUser.file}</p>
        </div>
      `;
    } else {
      this.displayContent = `
        <div>
          <p>No file uploaded for this user.</p>
        </div>
      `;
    }
  }

  handleAgreementClick(): void {
    this.show = false;
    this.displayContent = `
      <div>
        <h2>User Agreement:</h2>
        <p>User agreement text goes here...</p>
      </div>
    `;
  }

  handleSettingsClick(): void {
    this.show = false;
    this.displayContent = `
      <div>
        <h2>General Settings:</h2>
        <p>General settings content goes here...</p>
      </div>
    `;
  }
}
