import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { TabelleMannschaft} from "../../data/types";
import {matchFilter} from "../../filter-utils";


@Component({
  selector: 'app-bundesliga-suche',
  templateUrl: './bundesliga-suche.component.html',
  styleUrls: ['./bundesliga-suche.component.css']
})
export class BundesligaSucheComponent implements OnChanges{
  @Input()
  mannschaften : TabelleMannschaft[] = [];

  _filtedManschaften : TabelleMannschaft[] = [];

  filter: string = '';

  setFilter(filter:string){
    this.filter = filter;
    this.updateFilteredManschaften();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateFilteredManschaften();
  }

  private updateFilteredManschaften() {
    this._filtedManschaften = this.mannschaften.filter(matchFilter(this.filter));
  }

}
