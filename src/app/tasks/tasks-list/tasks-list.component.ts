import { Component, signal ,inject} from '@angular/core';
import { TasksService } from '../tasks.service';
import { TaskItemComponent } from './task-item/task-item.component';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  private tasksService = inject(TasksService)
  
  selectedFilter = signal<string>('all');
  //here just we need to read tasks not change
  tasks = this.tasksService.allTasks;


  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
