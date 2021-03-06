import type { CalendarWeekday } from '../typings';
import type { GetWeekdaysInit } from './typings';

export function getWeekdays(init: GetWeekdaysInit): CalendarWeekday[] {
  const {
    firstDayOfWeek = 0,
    showWeekNumber = false,
    weekLabel,

    longWeekdayFormat,
    narrowWeekdayFormat,
  } = init || {};
  const fixedFirstDayOfWeek = 1 + ((firstDayOfWeek + (firstDayOfWeek < 0 ? 7 : 0)) % 7);
  const $weekLabel = weekLabel || 'Wk';

  const weekdays: CalendarWeekday[] = [
    ...(
      showWeekNumber ?
        [{
          label: $weekLabel === 'Wk' ? 'Week' : $weekLabel,
          value: $weekLabel,
        }] :
        []
    ),
    ...Array.from(Array(7)).map<CalendarWeekday>((_, i) => {
      const d = new Date(Date.UTC(2017, 0, fixedFirstDayOfWeek + i));

      /** NOTE: Stripping LTR mark away for x-browser compatibilities and consistency reason */
      return {
        label: longWeekdayFormat(d),
        value: narrowWeekdayFormat(d),
      };
    }),
  ];

  return weekdays;
}
