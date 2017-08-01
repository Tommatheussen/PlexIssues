import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let comp: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let de: DebugElement[];
  let homeBtn: HTMLElement;
  let listBtn: HTMLElement;
  let newBtn: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToolbarComponent
      ],
      imports: [
        MaterialModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    comp = fixture.componentInstance;

    de = fixture.debugElement.queryAll(By.css("a"));
    homeBtn = de[0].nativeElement;
    listBtn = de[1].nativeElement;
    newBtn = de[2].nativeElement;
  });

  it('should create the toolbar', () => {
    expect(comp).toBeTruthy();
  });

  it('should have home button', () => {
    expect(homeBtn.textContent).toContain('Latest Issues');
  });

  it('should have list button', () => {
    expect(listBtn.textContent).toContain('All Issues');
  });

  it('should have list button', () => {
    expect(newBtn.textContent).toContain('New Issue');
  });
});
