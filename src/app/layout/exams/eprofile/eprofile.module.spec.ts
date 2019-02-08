import { EprofileModule } from './eprofile.module';

describe('EprofileModule', () => {
  let eprofileModule: EprofileModule;

  beforeEach(() => {
    eprofileModule = new EprofileModule();
  });

  it('should create an instance', () => {
    expect(eprofileModule).toBeTruthy();
  });
});
