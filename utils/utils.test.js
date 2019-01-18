import { formatDate, urlify } from './utils';

describe('formatDate function for blog home view', () => {
  const dateString = 'Mon May 11 1988';
  let formattedDate = formatDate(dateString);

  it('outputs a string', () => {
    expect(typeof formattedDate).toBe('string');
  });

  it('does not output an empty value', () => {
    expect(formattedDate).not.toBe(false);
  });
});

describe('urlify function for single post view', () => {
  const input = 'How to test React apps with Jest 101';
  const output = urlify(input);

  const expectedOutput = 'How%20to%20test%20React%20apps%20with%20Jest%20101';

  it('returns a string', () => {
    expect(typeof output).toBe('string');
  });

  it('inserts a %20 in to every space in the string', () => {
    expect(output).toEqual(expectedOutput);
  });

  it('does not add a %20 on to the beginning or end of a string with initial and terminal white space', () => {
    const inputWhiteSpace = '     How to test React apps with Jest 101   ';
    const outputWhiteSpace = urlify(inputWhiteSpace);
    expect(outputWhiteSpace).toEqual(expectedOutput);
  });
});
