export const getSubString = (text: string, length: number): string => {
  return text?.length > length ? `${text?.substring(0, length)}...` : text;
};

export const calculateItemsTotal = (items: CartItemProps[]): number => {
  return items
    ?.map((item: CartItemProps) => ({
      price: item.product_price,
      count: item.product_quantity,
    }))
    .reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.count,
      0
    );
};
