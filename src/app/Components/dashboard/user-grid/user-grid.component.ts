import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-user-grid',
  standalone: true,
  imports: [SideMenuComponent],
  templateUrl: './user-grid.component.html',
  styleUrl: './user-grid.component.css',
})
export class UserGridComponent {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (response: any[]) => {
        this.users = response;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
