import { CommonModule } from '@angular/common';
import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Student } from '../model/student';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent implements OnInit {

  // studentsList : Student[] = [];
  id : string = '';
  name : string = '';
  age : string = '';
  tell : string = '';
  class : string = '';
  teacherl : string = '';

  // constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    // this.getAllStudent();
  }

  item = {
    nn_List: '',
    n_List: '',
    a_List: '',
    t_List: '',
    c_List: '',
    tc_List: '',
  };

  nn_List: string[] = [];
  n_List: string[] = [];
  a_List: string[] = [];
  t_List: string[] = [];
  c_List: string[] = [];
  tc_List: string[] = [];
  searchTerm: string = '';

  onEnter() {
    if (this.item.nn_List && this.item.n_List && this.item.a_List && this.item.t_List && this.item.c_List && this.item.tc_List) {
      this.nn_List.push(this.item.nn_List);
      this.n_List.push(this.item.n_List);
      this.a_List.push(this.item.a_List);
      this.t_List.push(this.item.t_List);
      this.c_List.push(this.item.c_List);
      this.tc_List.push(this.item.tc_List);
      this.resetForm();
    }
  }

  resetForm() {
    this.item = {
      nn_List: '',
      n_List: '',
      a_List: '',
      t_List: '',
      c_List: '',
      tc_List: '',
    };
  }

  filteredList(): string[] {
    if (!this.searchTerm) {
      return this.nn_List;
    }
    const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
    return this.nn_List.filter((nickname, index) =>
      nickname.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }
}