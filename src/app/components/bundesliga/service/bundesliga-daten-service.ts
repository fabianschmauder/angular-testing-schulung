import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Liga, TabelleMannschaft} from "../../../data/types";

@Injectable({
  providedIn: 'root'
})
export class BundesligaDatenService {
  private tabelleSubject: BehaviorSubject<TabelleMannschaft[]> = new BehaviorSubject([]);
  public readonly tabelle$: Observable<TabelleMannschaft[]> = this.tabelleSubject.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  loadTabelle(liga: Liga): void {
    let url = 'https://www.openligadb.de/api/getbltable/' + mapLiga(liga) + '/2018';
    (<Observable<TabelleMannschaft[]>>this.httpClient.get(url))
      .subscribe(tabelle => this.tabelleSubject.next(tabelle));
  }
}

const mapLiga = (liga :Liga) => {
  switch (liga){
    case  Liga.ErsteLiga:
      return 'bl1';
    case  Liga.ZweiteLiga:
      return 'bl2';
  }
};

