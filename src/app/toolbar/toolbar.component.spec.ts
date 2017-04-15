import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

import { ToolbarComponent } from './toolbar.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToolbarComponent
      ],
      imports: [
        MaterialModule.forRoot()
      ]
    }).compileComponents();
  }));

  it('should create the toolbar', async(() => {
    const fixture = TestBed.createComponent(ToolbarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
