export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'AED';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rate: number; // multiplier from USD
  label: string;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: { code: 'USD', symbol: '$', rate: 1, label: 'USD ($)' },
  EUR: { code: 'EUR', symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { code: 'GBP', symbol: '£', rate: 0.79, label: 'GBP (£)' },
  AED: { code: 'AED', symbol: 'د.إ', rate: 3.67, label: 'AED (د.إ)' },
};

export function formatPrice(amountInUsd: number, currency: CurrencyCode = 'USD'): string {
  const config = CURRENCIES[currency] || CURRENCIES.USD;
  const converted = Math.round(amountInUsd * config.rate);
  
  if (currency === 'AED') {
    return `${config.symbol} ${converted.toLocaleString()}`;
  }
  return `${config.symbol}${converted.toLocaleString()}`;
}
