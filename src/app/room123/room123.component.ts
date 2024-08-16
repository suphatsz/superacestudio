import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


interface Schedule {
  sunday: string[];
  monday: string[];
  tuesday: string[];
  wednesday: string[];
  thursday: string[];
  friday: string[];
  saturday: string[];
}

@Component({
  selector: 'app-room123',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './room123.component.html',
  styleUrl: './room123.component.css'
})
export class Room123Component {

}
