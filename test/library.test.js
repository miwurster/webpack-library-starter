import Library from '../src';

test('getName()', () => {
  const o = new Library();
  expect(o.getName()).toBe('Hello World');
});

test('sanitize()', () => {
  const o = new Library();
  expect(o.sanitize()).toBe('hello-world');
});
