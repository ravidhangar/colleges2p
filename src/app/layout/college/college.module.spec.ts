import { CollegeModule } from './college.module';

describe('CollegeModule', () => {
  let collegeModule: CollegeModule;

  beforeEach(() => {
    collegeModule = new CollegeModule();
  });

  it('should create an instance', () => {
    expect(collegeModule).toBeTruthy();
  });
});
