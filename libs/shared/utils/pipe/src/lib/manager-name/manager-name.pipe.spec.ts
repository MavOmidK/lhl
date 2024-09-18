import { ManagerNamePipe } from '../manager-name.pipe';

describe('ManagerNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ManagerNamePipe();
    expect(pipe).toBeTruthy();
  });
});
