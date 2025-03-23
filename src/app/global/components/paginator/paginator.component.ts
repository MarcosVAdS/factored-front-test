import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent implements OnChanges {

  @Input() next: string | null = '';
  @Input() previous: string | null = '';
  @Input() count: number = 0;
  @Input() pageSize: number = 10;
  page: number = 1;
  totalPages: Array<any> = [];

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    if (this.count) {
      this.totalPages = new Array(Math.ceil(this.count / this.pageSize));
    }
  }

  goToPage(value: number | null): void {
    if (value) {
      this.pageChange.emit(value);
    }
  }
}
