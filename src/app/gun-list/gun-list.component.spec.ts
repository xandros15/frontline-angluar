import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GunListComponent } from './gun-list.component';

describe('GunListComponent', () => {
  let component: GunListComponent;
  let fixture: ComponentFixture<GunListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GunListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GunListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
