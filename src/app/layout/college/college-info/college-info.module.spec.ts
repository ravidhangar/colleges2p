import { CollegeInfoModule } from './college-info.module';

describe('CollegeInfoModule', () => {
  let collegeInfoModule: CollegeInfoModule;

  beforeEach(() => {
    collegeInfoModule = new CollegeInfoModule();
  });

  it('should create an instance', () => {
    expect(collegeInfoModule).toBeTruthy();
  });
});
