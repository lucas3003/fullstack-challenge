import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPeopleComponent } from './list-people.component';

describe('ListPeopleComponent', () => {
  let component: ListPeopleComponent;
  let fixture: ComponentFixture<ListPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
