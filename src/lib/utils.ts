import { clsxValue } from "./constants";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatHours(hours: number) {
  return `${hours.toLocaleString()} hrs`;
}

export function scoreTone(score: number) {
  if (score >= 82) return clsxValue.good;
  if (score >= 68) return clsxValue.watch;
  return clsxValue.risk;
}

export function truncate(value: string, length = 120) {
  return value.length > length ? `${value.slice(0, length - 1)}...` : value;
}
