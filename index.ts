class ValueHolder<T> {
  value: T;
}

const numberWrapper = (value: number): number[] => {
  return [value];
};

const stringWrapper = (value: string): string[] => {
  return [value];
};

const booleanWrapper = (value: boolean): boolean[] => {
  return [value];
};

const valueWrapper = <T>(value: T): T[] => {
  return [value];
};

valueWrapper<number>(10);
valueWrapper<boolean>(true);
valueWrapper<string>('10');
