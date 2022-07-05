export const nameCheckRegex = /^[a-zA-Z ]{1,30}$/;

export const surnameCheckRegex = /^[a-zA-Z ]{1,30}$/;

export const emailCheckRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const passwordCheckRegex =
  /^(?=.*[0-9])(?=.*[!@#$%^&*?])[a-zA-Z0-9!@#$%^&*?]{6,16}$/;
