import React, { useMemo, useState } from "react"
import { useFormContext } from "react-hook-form"
import countryList from 'react-select-country-list'
import Select from "react-select"
import { Input } from "./ui/input"

const StepTwo: React.FC = () => {
  const { register } = useFormContext()
  const [value, setValue] = useState(null)

  // useMemo so the list isn't rebuilt on every render
  const options_country = useMemo(() => countryList().getData({ language: "fr" }), [])

  const changeHandler = (selected: any) => {
    setValue(selected)
  }

  const options_representative = [
    "administratif",
    "et/ou thérapeutique",
  ]

  const options_relationship = [
    "Epoux(se)",
    "Fils (fille)",
    "Représ.légal",
    "Autre"
  ]

  return (
    <div className="space-y-6">
      <div>
        <label className="font-medium">Degré d’urgence <span className="text-red-500">(Required)</span></label>
        <div className="mt-2 space-y-2">
          {options_representative.map((label, idx) => (
            <div key={idx}>
              <input type="radio" value={label} {...register("representative")} className="mr-2" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">Prénom</label>
          <Input {...register("firstname", { required: true })}/>
        </div>
        <div>
          <label className="block">Nom</label>
          <Input {...register("lastname", { required: true })}/>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block">Adresse</label>
          <Input {...register("rep_address", { required: true })}/>
        </div>
        <div>
          <label className="block">NPA</label>
          <Input type="number" {...register("lastname", { required: true })}/>
        </div>
        <div>
          <label className="block">Lieu</label>
          <Input {...register("rep_city", { required: true })}/>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">Téléphone privé</label>
          <Input {...register("rep_telephone_private", { required: true })}/>
        </div>
        <div>
          <label className="block">Téléphone prof.</label>
          <Input {...register("rep_telephone_prof", { required: true })}/>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">Téléphone mobile</label>
          <Input {...register("rep_telephone_mobile", { required: true })}/>
        </div>
        <div>
          <label className="block">E-mail</label>
          <Input {...register("rep_email", { required: true })}/>
        </div>
      </div>

      {/* NPA et Lieu */}
      <div>
        <label className="font-medium">Degré d’urgence <span className="text-red-500">(Required)</span></label>
        <div className="mt-2 space-y-2">
          {options_relationship.map((label, idx) => (
            <div key={idx}>
              <input type="radio" value={label} {...register("rep_relationship")} className="mr-2" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StepTwo
