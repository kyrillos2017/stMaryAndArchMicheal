export enum ToastrMessages {
    success = 'success',
    info = 'info',
    warn = 'warn',
    error = 'error',
    custom = 'custom'
}

export enum PriestlyRank {
  keseseia = 1,
  qomoseia = 2
}

export const StringIsNotNumber = (value: any) => isNaN(Number(value)) === false;
export function enumToArray(enumme: any) {
    return Object.keys(enumme)
        .filter(StringIsNotNumber)
        .map(key => ({ id: +key, name: enumme[key] }));
}
export function findArray(array: any[], key: number, property: string) {
    return array.filter(el => {
        return el.id === key
    })
}
