import { Routes } from '@angular/router';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { DashboardComponent } from './main-components/dashboard/dashboard.component';
import { AttendanceComponent } from './main-components/attendance/attendance.component';
import { LeaveComponent } from './main-components/leave/leave.component';
import { AnalyticsComponent } from './main-components/analytics/analytics.component';
import { UsersComponent } from './main-components/users/users.component';
import { UserDetailsComponetComponent } from './main-components/user-details-componet/user-details-componet.component';
import { LoginComponent } from './auth/login/login.component';
import { AttendanceInnerComponent } from './main-components/attendance-inner/attendance-inner.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: '', 
    component: LayoutComponent, 
    children: [
        { path: '', component: DashboardComponent },
        { path: 'attendance', component: AttendanceComponent },
        {path:'',component:DashboardComponent},
        {path:'attendance',component:AttendanceComponent},
        {path:'attendance-inner/:id',component:AttendanceInnerComponent},
        {path:'leave',component:LeaveComponent},
        {path:'analytics',component:AnalyticsComponent},
        {path:'users',component:UsersComponent},
        {path:'user-detail',component:UserDetailsComponetComponent}
    ]
  }

];
