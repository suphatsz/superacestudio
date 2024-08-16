import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-class',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './class.component.html',
  styleUrl: './class.component.css'
})
export class ClassComponent {

}
