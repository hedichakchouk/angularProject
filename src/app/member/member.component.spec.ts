import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberComponentsaa } from './member.component';

describe('MemberComponent', () => {
  let component: MemberComponentsaa;
  let fixture: ComponentFixture<MemberComponentsaa>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberComponentsaa]
    });
    fixture = TestBed.createComponent(MemberComponentsaa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
