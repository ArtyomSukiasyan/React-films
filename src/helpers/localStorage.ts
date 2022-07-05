import { ICurrentUser } from "../models/CurrentUser";

export function localStorageSetItem(
  key: string,
  value: Array<ICurrentUser>
): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(err);
  }
}
