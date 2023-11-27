import { Routes } from '@angular/router';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { DashboardComponent } from './main-components/dashboard/dashboard.component';
import { AttendanceComponent } from './main-components/attendance/attendance.component';
import { LeaveComponent } from './main-components/leave/leave.component';
import { AnalyticsComponent } from './main-components/analytics/analytics.component';
import { UsersComponent } from './main-components/users/users.component';
import { UserDetailsComponetComponent } from './main-components/user-details-componet/user-details-componet.component';

export const routes: Routes = [
    {path:'',component:DashboardComponent},
    {path:'attendance',component:AttendanceComponent},
    {path:'leave',component:LeaveComponent},
    {path:'analytics',component:AnalyticsComponent},
    {path:'users',component:UsersComponent},
    {path:'user-detail',component:UserDetailsComponetComponent},
];
