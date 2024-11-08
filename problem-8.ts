const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean =>
  keys.every((key): boolean => key in obj);
