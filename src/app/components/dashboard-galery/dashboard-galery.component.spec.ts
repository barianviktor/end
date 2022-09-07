import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGaleryComponent } from './dashboard-galery.component';

describe('DashboardGaleryComponent', () => {
  let component: DashboardGaleryComponent;
  let fixture: ComponentFixture<DashboardGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGaleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
