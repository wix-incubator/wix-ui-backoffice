// coppied from type zoo: https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-377567046
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
