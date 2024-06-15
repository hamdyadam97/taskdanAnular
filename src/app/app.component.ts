import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { VerifyComponent } from './Components/verify/verify.component';
import { UpdateComponent } from './Components/update/update.component';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';
import { SideMenuComponent } from './Components/dashboard/side-menu/side-menu.component';
import { SettingsComponent } from './Components/dashboard/settings/settings.component';
import { UserGridComponent } from './Components/dashboard/user-grid/user-grid.component';
import { MotoStatsComponent } from './Components/dashboard/moto-stats/moto-stats.component';
import { UserSectionComponent } from './Components/dashboard/user-section/user-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RegisterComponent,
    VerifyComponent,
    UpdateComponent,
    DashboardComponent,
    SideMenuComponent,
    SettingsComponent,
    UserGridComponent,
    MotoStatsComponent,
    UserSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dan_front';
}
