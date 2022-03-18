export const currencyFormater = new Intl.NumberFormat('es-BO', {
	style: 'currency',
	currency: 'BOB'
});
export const dateFormater = new Intl.DateTimeFormat('es-BO', {
	year: 'numeric',
	month: 'numeric',
	day: 'numeric'
});
export const timeFormater = new Intl.DateTimeFormat('es-BO', {
	hour: 'numeric',
	minute: 'numeric'
});
export const dateTimeFormater = new Intl.DateTimeFormat('es-BO', {
	year: 'numeric',
	month: 'numeric',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric'
});
export const numberFormater = new Intl.NumberFormat('es-BO', { style: 'decimal' });
export const compactNumberFormater = new Intl.NumberFormat('es-BO', {
	notation: 'compact'
});
export const percentFormater = new Intl.NumberFormat('es-BO', {
	style: 'percent',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
});
