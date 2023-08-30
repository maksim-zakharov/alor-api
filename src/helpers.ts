import ms, { StringValue } from "ms";

/**
 * Возвращает интервал времени в формате { from, to } по заданному смещению и базовой дате.
 * Для смещения можно использовать кол-во миллисекунд или строку в формате из https://github.com/vercel/ms
 */
export const fromTo = (offset: string | number, base = new Date()) => {
  // Не использую StringValue, т.к. с ним больше мороки: нужно импортить при использовании итд.
  const offsetMs =
    typeof offset === "string" ? ms(offset as StringValue) : offset;
  const date = new Date(base.valueOf() + offsetMs).getTime() / 1000;
  const [from, to] =
    offsetMs > 0
      ? [base.getTime() / 1000, date]
      : [date, base.getTime() / 1000];
  return { from: Math.floor(from), to: Math.floor(to) };
};
