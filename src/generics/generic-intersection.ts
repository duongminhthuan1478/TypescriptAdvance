type NameFields = { firstName: string, lastName: string };
export type Person = { firstName: string, lastName: string, email: string, birthDate: string, fullName: string }

/**
 * '&' symbol: intersection type, like interitance 
 * 'extends' keyword: Expanding type return for generic type
 * @param obj: generic type
 * @returns object have fullName
 */
export function addFullName<T extends NameFields>(obj: T): T & { fullName: string } {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
  }
}




