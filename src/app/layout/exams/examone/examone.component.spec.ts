import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ExamoneComponent } from './examone.component';
import {  } from './examone.module';

describe('ExamoneComponent', () => {
  let component: ExamoneComponent;
  let fixture: ComponentFixture<ExamoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({imports: [
        ExamoneModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [ ExamoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
