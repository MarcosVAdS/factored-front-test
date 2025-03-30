import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-paginator',
  imports: [CommonModule],
  templateUrl: './paginator.component.html',
  standalone: true,
})
export class PaginatorComponent implements OnInit {
  @Input() next: string | null = '';
  @Input() previous: string | null = '';
  @Input() count: number = 0;
  @Input() pageSize: number = 10;
  page: number = 1;
  totalPages: Array<any> = [];

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    if (this.count) {
      this.totalPages = new Array(Math.ceil(this.count / this.pageSize));
    }
  }

  goToPage(value: number): void {
    if (value <= this.totalPages.length && value >= 1) {
      this.page = value;
      this.pageChange.emit(value);
    }
  }
}
