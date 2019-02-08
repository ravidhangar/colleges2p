import { ExamoneModule } from './examone.module';

describe('ExamoneModule', () => {
  let examoneModule: ExamoneModule;

  beforeEach(() => {
    examoneModule = new ExamoneModule();
  });

  it('should create an instance', () => {
    expect(examoneModule).toBeTruthy();
  });
});
