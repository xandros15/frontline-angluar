import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GunDetailComponent } from './gun-detail.component';

describe('GunDetailComponent', () => {
  let component: GunDetailComponent;
  let fixture: ComponentFixture<GunDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GunDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GunDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
