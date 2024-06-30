import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyinfoPage } from './myinfo.page';

describe('MyinfoPage', () => {
  let component: MyinfoPage;
  let fixture: ComponentFixture<MyinfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
