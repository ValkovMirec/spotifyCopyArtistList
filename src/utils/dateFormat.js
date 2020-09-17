import { format } from "date-fns";

export function dateFormat(d) {
  return format(new Date(d), "io/MMM/R");
}
