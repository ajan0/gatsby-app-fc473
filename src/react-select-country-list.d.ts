declare module "react-select-country-list" {
  type Country = {
    value: string
    label: string
  }

  interface CountryList {
    getData: (options?: { language?: string }) => Country[]
  }

  export default function countryList(): CountryList
}
