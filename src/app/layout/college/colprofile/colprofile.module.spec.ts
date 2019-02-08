import { ColprofileModule } from './colprofile.module';

describe('ColprofileModule', () => {
  let colprofileModule: ColprofileModule;

  beforeEach(() => {
    colprofileModule = new ColprofileModule();
  });

  it('should create an instance', () => {
    expect(colprofileModule).toBeTruthy();
  });
});
