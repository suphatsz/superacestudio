import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RoomComponent } from './room/room.component';
import { KpopComponent } from './kpop/kpop.component';
import { KidComponent } from './kid/kid.component';
import { ClassComponent } from './class/class.component';
import { PrivateComponent } from './private/private.component';
import { SummaryComponent } from './summary/summary.component';
import { Room123Component } from './room123/room123.component';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AngularFireModule } from '@angular/fire/compat'
import { Room1Component } from './room1/room1.component';
import { Room2Component } from './room2/room2.component';
import { Room3Component } from './room3/room3.component';
import { AddrentComponent } from './addrent/addrent.component';
import { AddclassComponent } from './addclass/addclass.component';
import { TeacherComponent } from './teacher/teacher.component';
// import { environment } from '../environments/environment';import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

export const routes: Routes = [
    { path: 'user', component: UserComponent },
    { path: 'class', component: ClassComponent },
    { path: 'addrent', component: AddrentComponent },
    { path: 'addclass', component: AddclassComponent },
    { path: 'room', component: RoomComponent },
    { path: 'room1', component: Room1Component },
    { path: 'room2', component: Room2Component },
    { path: 'room3', component: Room3Component },
    { path: 'room123', component: Room123Component },
    { path: 'teachers', component: TeacherComponent },
    { path: 'k-pop', component: KpopComponent },
    { path: 'private', component: PrivateComponent },
    { path: 'summary', component: SummaryComponent },
    { path: 'kid', component: KidComponent },
    { path: 'app', component: AppComponent }
];

const firebaseConfig = {
    apiKey: "AIzaSyCB4Mwvdj0f_sPH0f2qqMG0-_uLmSeYSn4",
    authDomain: "super-ace-data.firebaseapp.com",
    projectId: "super-ace-data",
    storageBucket: "super-ace-data.appspot.com",
    messagingSenderId: "27306500162",
    appId: "1:27306500162:web:0b7eada279b3565cf1cddb",
    measurementId: "G-M6728BTDP1"
  };

  const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

@NgModule({
    imports: [ RouterModule.forRoot(routes),
            BrowserModule,
            FormsModule,
            AngularFireModule,],
    exports: [RouterModule],
})
  export class AppRoutingModule { }