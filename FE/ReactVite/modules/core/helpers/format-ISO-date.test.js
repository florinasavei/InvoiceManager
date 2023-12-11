import { formatISODate } from './format-ISO-date';

describe('formatISODate function', () => {

  it('formats an ISO UTC date correctly in Romania', () => {
    const isoDate = '2023-10-29T10:30:00Z';
    const formattedDate = formatISODate(isoDate, 'Europe/Bucharest');

    // Define the expected result for Romania timezone
    const expectedFormattedDate = 'Oct 29, 2023, 12:30:00 PM Romania Time'; // Eastern European Time

    expect(formattedDate).toEqual(expectedFormattedDate);
  });

  it('formats an ISO UTC date correctly in Germany', () => {
    const isoDate = '2023-10-29T10:30:00Z';
    const formattedDate = formatISODate(isoDate, 'Europe/Berlin');

    // Define the expected result for Germany timezone
    const expectedFormattedDate = 'Oct 29, 2023, 11:30:00 AM Germany Time';

    expect(formattedDate).toEqual(expectedFormattedDate);
  });

  it('formats an Romanian date correctly in Germany', () => {
    const romanianDate = '2023-10-29T10:30:00+02:00';
    const formattedDate = formatISODate(romanianDate, 'Europe/Berlin');

    // Define the expected result for Germany timezone
    const expectedFormattedDate = 'Oct 29, 2023, 09:30:00 AM Germany Time';

    expect(formattedDate).toEqual(expectedFormattedDate);
  });

  it('formats an Germany date correctly in Romania', () => {
    const germanyDate = '2023-10-29T10:30:00+01:00';
    const formattedDate = formatISODate(germanyDate, 'Europe/Bucharest');

    // Define the expected result for Germany timezone
    const expectedFormattedDate = 'Oct 29, 2023, 11:30:00 AM Romania Time';

    expect(formattedDate).toEqual(expectedFormattedDate);
  });

  it('handles an invalid ISO date', () => {
    const invalidIsoDate = 'invalid-date';
    const formattedDate = formatISODate(invalidIsoDate);

    // Define the expected result for an invalid ISO date
    const expectedFormattedDate = 'Invalid Date';

    expect(formattedDate).toEqual(expectedFormattedDate);
  });
});
