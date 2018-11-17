import {Component, Input, OnInit} from '@angular/core';
import { TabelleMannschaft} from "../../data/types";
import {matchFilter} from "../../filter-utils";


@Component({
  selector: 'app-bundesliga-tabelle',
  templateUrl: './bundesliga-tabelle.component.html',
  styleUrls: ['./bundesliga-tabelle.component.css']
})
export class BundesligaTabelleComponent {
  @Input()
  mannschaften : TabelleMannschaft[] = [];
}
