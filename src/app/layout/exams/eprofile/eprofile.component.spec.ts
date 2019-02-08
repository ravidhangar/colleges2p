import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EprofileComponent } from './eprofile.component';
import { EprofileModule } from './eprofile.module';

describe('EprofileComponent', () => {
  let component: EprofileComponent;
  let fixture: ComponentFixture<EprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({imports: [
        EprofileModule,
        RouterTestingModule,
        BrowserAnimationsModule
       ],
      declarations: [ EprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
