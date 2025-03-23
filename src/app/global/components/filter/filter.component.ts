import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  search: string = '';

  @Output() searchOutput = new EventEmitter<string>();
  
  onSearch() {
    this.searchOutput.emit(this.search)
  }
}
