import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesItemsComponent } from './profiles-items.component';

describe('ProfilesItemsComponent', () => {
  let component: ProfilesItemsComponent;
  let fixture: ComponentFixture<ProfilesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilesItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
