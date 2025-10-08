import { Component, signal ,inject, computed} from '@angular/core';
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
  // tasks = this.tasksService.allTasks;
  tasks = computed(()=>{
    switch(this.selectedFilter()){
      case 'all':
        return this.tasksService.allTasks()

      case 'open':
        return this.tasksService.allTasks().filter((task)=>task.status === 'OPEN')  
    
       case 'in-progress':
        return this.tasksService.allTasks().filter(task=>task.status === "IN_PROGRESS") 
    
        case 'done':
        return this.tasksService.allTasks().filter(task=>task.status === "DONE") 

      default:
      return  this.tasksService.allTasks()
      }
      
  })


  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
