// @ts-ignore
import sc from 'states-cities-db'

type Country = {
  currency: string
  iso: string
  iso2: string
  latlng: number[]
  name: string
  prefix: string
  region: string
  slug: string
  subregion?: string
}
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const Countries = sc.getCountries() as Country[]

const getCountryTelCode = (countryIso: string) =>
  countryIso && Countries.find(({ iso }) => iso === countryIso)!.prefix

const getCountryIsoByPrefix = (prefix: string) =>
  prefix &&
  Countries.find(({ prefix: countryPrefix }) => countryPrefix === prefix)!.iso

export { Countries, getCountryIsoByPrefix, getCountryTelCode }
