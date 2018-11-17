import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-mannschaft-filter',
  templateUrl: './mannschaft-filter.component.html',
  styleUrls: ['./mannschaft-filter.component.css']
})
export class MannschaftFilterComponent {

  @Output()
  onFilterChange: EventEmitter<string> = new EventEmitter<string>();

  onKey(event: any) {
    this.filter = event.target.value;
  }

  set filter(value: string){
    this.onFilterChange.emit(value)
  }
}
