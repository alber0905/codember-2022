import decryptMessage from '../src/utils/c2/decryptMessage';

describe('Challenge 2', () => {
  it('decrypts text', (): void => {
    expect(decryptMessage('109105100117')).toBe('midu');
    expect(decryptMessage('9911110010110998101114')).toBe('codember');
    expect(decryptMessage('9911110010110998101114 109105100117')).toBe('codember midu');
    expect(decryptMessage('11210897121 116101116114105115')).toBe('play tetris');
  });
});
