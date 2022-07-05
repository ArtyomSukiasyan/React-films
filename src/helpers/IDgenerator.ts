import { ICurrentUser } from "../models/CurrentUser";

export default function IDgenerator(arr: ICurrentUser[]): number {
  if (arr.length === 0) {
    return 1;
  }

  return arr[arr.length - 1].id + 1;
}
