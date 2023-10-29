export const formatISODate = (
  isoDate: string,
  customTimeZone: string | undefined = undefined
): string => {
  const date = new Date(isoDate);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: 'shortGeneric',
    timeZone: customTimeZone ?? 'UTC'
  };
  return date.toLocaleDateString("en-US", options);
};
