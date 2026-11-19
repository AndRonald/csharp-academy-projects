export const getYear = (date: string) => new Date(date).getFullYear();

export const formatPrice = (price: number) =>
  price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
