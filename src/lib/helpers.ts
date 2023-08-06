export const getSubString = (text: string, length: number): string => {
  return text?.length > length ? `${text?.substring(0, length)}...` : text;
};

export const calculateItemsTotal = (items: any): number => {
  return items
    ?.map((item: any) => ({ price: item.price, count: item.quantity }))
    .reduce(
      (previousValue: any, currentValue: any) =>
        previousValue + currentValue.price * currentValue.count,
      0
    );
};
