export function shorten(value?: string, start = 6, end = 4): string {
  if (!value) return "-";
  if (value.length <= start + end) return value;
  return `${value.slice(0, start)}...${value.slice(-end)}`;
}
