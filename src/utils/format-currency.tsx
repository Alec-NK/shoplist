export function formatNumberToBRLCurrency(num: number) {
  const formatted_currency = num.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return formatted_currency;
}
