import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CollegeInfoComponent } from './college-info.component';
import { CollegeInfoModule } from './college-info.module';

describe('CollegeInfoComponent', () => {
  let component: CollegeInfoComponent;
  let fixture: ComponentFixture<CollegeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({imports: [
        CollegeInfoModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [ CollegeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
