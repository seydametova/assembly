import { DateTime } from 'luxon';


export const diffDate = (firstDate, secondDate) => {
    let firstDateDT = DateTime.fromISO(firstDate);
    let secondDateDT = DateTime.fromISO(secondDate);

    if (firstDate > secondDate)
        [firstDateDT, secondDateDT] = [secondDateDT, firstDateDT];

    return secondDateDT.diff(firstDateDT, ['years', 'months', 'days']).toObject();
}


export const diffToHtml = diff => `
    <span>
        ${diff.years ? 'Лет:' + diff.years : ''}
        ${diff.months ? 'Месяцев:' + diff.months : ''}
        ${diff.days ? 'Дней:' + diff.days : ''}
    </span>
`

