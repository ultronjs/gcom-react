const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined,{currency:"INR",style:"currency"})

export const formatCurreny = (number) => CURRENCY_FORMATTER.format(number)