import { ComponentFixture, TestBed, async} from '@angular/core/testing';
import {MannschaftFilterComponent} from "./mannschaft-filter.component";
import {By} from "@angular/platform-browser";

describe('MannschaftFilterComponent', () => {
  let comp: MannschaftFilterComponent;
  let fixture: ComponentFixture<MannschaftFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MannschaftFilterComponent ]
    });
    fixture = TestBed.createComponent(MannschaftFilterComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

 it('typing', async(() => {
   comp.onFilterChange.subscribe((value)=>
     expect(value).toBe('Test Value')
   );
   comp.onKey({target:{value:'Test Value'}});
  }));

});
