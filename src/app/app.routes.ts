import { Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { VerifyComponent } from './Components/verify/verify.component';
import { UpdateComponent } from './Components/update/update.component';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';
import { UserGridComponent } from './Components/dashboard/user-grid/user-grid.component';
import { MotoStatsComponent } from './Components/dashboard/moto-stats/moto-stats.component';
import { SettingsComponent } from './Components/dashboard/settings/settings.component';
import { UserSectionComponent } from './Components/dashboard/user-section/user-section.component';

export const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'verify', component: VerifyComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-grid', component: UserGridComponent },
  { path: 'moto-state', component: MotoStatsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'user-sections', component: UserSectionComponent },
];
