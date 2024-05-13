export type ObjectValueType<
  T extends {
    [key: string]: string;
  },
> = T[keyof T];
