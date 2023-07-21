import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleMessagesComponent } from './multiple-messages.component';

describe('MultipleMessagesComponent', () => {
  let component: MultipleMessagesComponent;
  let fixture: ComponentFixture<MultipleMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
