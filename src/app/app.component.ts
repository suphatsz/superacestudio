import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { RouterOutlet, Routes } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RoomComponent } from './room/room.component';
import { KpopComponent } from './kpop/kpop.component';
import { KidComponent } from './kid/kid.component';
import { ClassComponent } from './class/class.component';
import { PrivateComponent } from './private/private.component';
import { SummaryComponent } from './summary/summary.component';
import { Room123Component } from './room123/room123.component';
import { Room1Component } from './room1/room1.component';
import { Room2Component } from './room2/room2.component';
import { Room3Component } from './room3/room3.component';
import { AddrentComponent } from './addrent/addrent.component';
import { AddclassComponent } from './addclass/addclass.component';
import { TeacherComponent } from './teacher/teacher.component';

const appRoutes: Routes = [
  { path: 'sidebar', component: SidebarComponent },
  { path: 'room', component: RoomComponent },
  { path: 'room1', component: Room1Component },
  { path: 'room2', component: Room2Component },
  { path: 'room3', component: Room3Component },
  { path: 'room123', component: Room123Component },
  { path: 'teachers', component: TeacherComponent },
  { path: 'class', component: ClassComponent },
  { path: 'addrent', component: AddrentComponent },
  { path: 'addclass', component: AddclassComponent },
  { path: 'private', component: PrivateComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'k-pop', component: KpopComponent },
  { path: 'kid', component: KidComponent },
  { path: 'user', component: UserComponent },
  { path: '',

    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            SidebarComponent,
            UserComponent,
            RoomComponent,
            KpopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'super_ace';
}
