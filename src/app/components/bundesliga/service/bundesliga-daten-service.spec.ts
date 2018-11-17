import {async, TestBed} from '@angular/core/testing';
import {BundesligaDatenService} from "./bundesliga-daten-service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Liga, TabelleMannschaft} from "../../../data/types";
import {Injector} from "@angular/core";

describe('Bundesliga daten Service', () => {


  let httpTestingController: HttpTestingController;
  let service: BundesligaDatenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      providers: [BundesligaDatenService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(BundesligaDatenService);
  });

  it('load data ', async(() => {
    service.loadTabelle(Liga.ErsteLiga);
    const req = httpTestingController.expectOne('https://www.openligadb.de/api/getbltable/bl1/2018');

    const teamData : TabelleMannschaft[] = [{TeamName: 'Bla2',Points:10,TeamIconUrl:''}];
    req.flush(teamData);

    service.tabelle$.subscribe((daten: TabelleMannschaft[]) => {
      expect(daten.length).toBe(1);
      expect(daten[0].TeamName).toBe('Bla2');
    });

  }));


});
