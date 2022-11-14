import validateRow from '../src/utils/c1/validateRow';

describe('Challenge 1', () => {
  it('Validates rows', () => {
    expect(
      validateRow('usr:@midudev eme:mi@gmail.com psw:123456 age:22 loc:bcn fll:82'),
    ).toBeTruthy();

    expect(
      validateRow('fll:111 eme:yrfa@gmail.com usr:@codember psw:123456 age:21 loc:World'),
    ).toBeTruthy();
  });

  expect(
    validateRow('psw:11133 loc:Canary fll:333 usr:@pheralb eme:pheralb@gmail.com'),
  ).toBeFalsy();

  expect(
    validateRow('usr:@itziar age:19 loc:isle psw:aaa fll:222 eme:itzi@gmail.com'),
  ).toBeTruthy();

  expect(
    validateRow(`usr:@itziar age:19
    loc:isle psw:aaa fll:222
    eme:itzi@gmail.com`),
  ).toBeTruthy();

  expect(
    validateRow(`fll:111 eme:yrfa@gmail.com usr:@codember
  psw:123456 age:21 loc:World`),
  ).toBeTruthy();
});
