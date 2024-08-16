import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
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
  selector: 'app-room3',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './room3.component.html',
  styleUrl: './room3.component.css'
})
export class Room3Component  implements AfterViewInit  {
  selectedClass: HTMLElement | null = null;
  cancelMode: boolean = false;
  schedules: Schedule[] = [];
  currentScheduleIndex: number = 0;

  ngAfterViewInit(): void {
    const classElements = document.querySelectorAll('.class_name');
    classElements.forEach(classElement => {
      classElement.addEventListener('click', () => this.selectClass(classElement as HTMLElement));
    });

    this.updateTaskSlots();
  }

  selectClass(classElement: HTMLElement): void {
    if (this.cancelMode) return;

    if (this.selectedClass) {
      this.selectedClass.classList.remove('selected-class');
    }
    this.selectedClass = classElement;
    this.selectedClass.classList.add('selected-class');
  }

  handleSlotClick(slot: HTMLElement): void {
    if (this.cancelMode) {
      this.cancelSelectedSlot(slot);
    } else if (this.selectedClass) {
      this.addClassToSlot(slot);
    } else {
      alert('Please select a class first.');
    }
  }

  addClassToSlot(slot: HTMLElement): void {
    slot.textContent = this.selectedClass?.textContent || '';
    slot.style.backgroundColor = this.selectedClass?.style.backgroundColor || '';
    slot.classList.add('filled');
  }

  cancelSelectedSlot(slot: HTMLElement): void {
    slot.textContent = '';
    slot.style.backgroundColor = '';
    slot.classList.remove('filled');
  }

  deselectAll(): void {
    const filledTasks = document.querySelectorAll('.task.filled');
    filledTasks.forEach(task => {
      this.cancelSelectedSlot(task as HTMLElement);
    });
  }

  toggleCancelMode(): void {
    this.cancelMode = !this.cancelMode;
    const cancelBtn = document.getElementById('cancel');
    if (cancelBtn) {
      cancelBtn.classList.toggle('active', this.cancelMode);
    }
  }

  nextSchedule(): void {
    if (this.currentScheduleIndex < this.schedules.length - 1) {
      this.currentScheduleIndex++;
      this.updateTaskSlots();
    }
  }

  prevSchedule(): void {
    if (this.currentScheduleIndex > 0) {
      this.currentScheduleIndex--;
      this.updateTaskSlots();
    }
  }

  addNewReservation(): void {
    const newSchedule: Schedule = {
      sunday: Array(10).fill(''),
      monday: Array(10).fill(''),
      tuesday: Array(10).fill(''),
      wednesday: Array(10).fill(''),
      thursday: Array(10).fill(''),
      friday: Array(10).fill(''),
      saturday: Array(10).fill('')
    };
    this.schedules.push(newSchedule);
    this.currentScheduleIndex = this.schedules.length - 1;
    this.updateTaskSlots();
  }

  updateTaskSlots(): void {
    const taskSlots = document.querySelectorAll('.task');
    taskSlots.forEach(slot => {
      slot.addEventListener('click', () => this.handleSlotClick(slot as HTMLElement));
    });
  }
}