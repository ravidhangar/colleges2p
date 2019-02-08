import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ExamtwoComponent } from './examtwo.component';
import { ExamtwoModule } from './examtwo.module';

describe('ExamtwoComponent', () => {
  let component: ExamtwoComponent;
  let fixture: ComponentFixture<ExamtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({imports: [
        ExamtwoModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [ ExamtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
