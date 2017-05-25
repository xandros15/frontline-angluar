import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GunCompareComponent } from './gun-compare.component';

describe('GunCompareComponent', () => {
  let component: GunCompareComponent;
  let fixture: ComponentFixture<GunCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GunCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GunCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
