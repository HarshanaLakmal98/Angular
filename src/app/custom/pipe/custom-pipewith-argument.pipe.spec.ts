import { CustomPipewithArgumentPipe } from './custom-pipewith-argument.pipe';

describe('CustomPipewithArgumentPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomPipewithArgumentPipe();
    expect(pipe).toBeTruthy();
  });
});
