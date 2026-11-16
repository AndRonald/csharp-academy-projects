export const getYear = (date: string) => new Date(date).getFullYear();

export const formatPrice = (price: number) =>
    price.toLocaleString('pr-BR', { style: 'currency', currency: 'BRL'});
