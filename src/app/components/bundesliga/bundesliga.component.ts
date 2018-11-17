import {Component, OnInit} from '@angular/core';
import {BundesligaDatenService} from "./service/bundesliga-daten-service";
import {Liga} from "../../data/types";

@Component({
  selector: 'app-bundesliga',
  templateUrl: './bundesliga.component.html',
  styleUrls: ['./bundesliga.component.css']
})
export class BundesligaComponent implements OnInit{
    private _liga: Liga;

  constructor(public datenService:BundesligaDatenService){}


  ngOnInit() {
    this.liga = Liga.ErsteLiga;
  }

  set liga(liga: Liga) {
    this._liga = liga;
    this.datenService.loadTabelle(liga);
  }

  get liga() {
    return this._liga;
  }
}
