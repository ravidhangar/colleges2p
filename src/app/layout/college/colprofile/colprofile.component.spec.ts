import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ColprofileComponent } from './colprofile.component';
import { ColprofileModule } from './colprofile.module';
describe('ColprofileComponent', () => {
  let component: ColprofileComponent;
  let fixture: ComponentFixture<ColprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({imports: [
        ColprofileModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [ ColprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
