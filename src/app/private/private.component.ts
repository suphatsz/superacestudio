import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-private',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './private.component.html',
  styleUrl: './private.component.css'
})
export class PrivateComponent {
  item = {
    nn_List: '',
    n_List: '',
    a_List: '',
    t_List: '',
  };

  nn_List: string[] = [];
  n_List: string[] = [];
  a_List: string[] = [];
  t_List: string[] = [];

  onEnter() {
    if (this.item.nn_List && this.item.n_List && this.item.a_List && this.item.t_List) {
      this.nn_List.push(this.item.nn_List);
      this.n_List.push(this.item.n_List);
      this.a_List.push(this.item.a_List);
      this.t_List.push(this.item.t_List);


      this.resetForm();
    }
  }

  resetForm() {
    this.item = {
      nn_List: '',
      n_List: '',
      a_List: '',
      t_List: '',
    };
  }
}
