import { ExamtwoModule } from './examtwo.module';

describe('ExamtwoModule', () => {
  let examtwoModule: ExamtwoModule;

  beforeEach(() => {
    examtwoModule = new ExamtwoModule();
  });

  it('should create an instance', () => {
    expect(examtwoModule).toBeTruthy();
  });
});
