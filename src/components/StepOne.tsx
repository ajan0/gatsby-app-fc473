import React, { useMemo, useState } from "react"
import { useFormContext } from "react-hook-form"
import countryList from 'react-select-country-list'
import Select from "react-select"
import { Input } from "./ui/input"
import { FormField } from "./FormField"
import { RadioGroupField } from "./RadioGroupField"

const StepOne: React.FC = () => {
  const { register, formState: { errors } } = useFormContext()
  const [value, setValue] = useState(null)

  // useMemo so the list isn't rebuilt on every render
  const options_country = useMemo(() => countryList().getData({ language: "fr" }), [])

  const changeHandler = (selected: any) => {
    setValue(selected)
  }

  const options_room = [
    "1 lit",
    "2 lits",
    "TV",
    "Téléphone",
    "RC",
    "Matériel de toilette",
    "Coiffeur",
    "Dentiste",
    "Hygiéniste dentaire",
    "Pédicure prescription médicale",
    "Argent poche",
    "Accord pour vaccin saisonnier contre la grippe",
  ]

  const options_urgency = [
    "Entrée urgente",
    "Entrée dans 1 mois",
    "Entrée dans les 3 mois",
    "Entrée dans les 6 mois",
    "Être inscrit sur la liste d’attente",
    "Autre",
  ]

  const options_relationship_status = [
    "Marié(e)",
    "Célibataire",
    "Séparé(e)",
    "Divorcé(e)",
    "Veuf(ve)",
  ]

  const options_lifestyle = [
    "Vivant seul",
    "Conjoint vivant dans la même maison",
    "Autre"
  ]

  const options_provenence = [
    "Domicile",
    "Hôpital",
    "Autre"
  ]

  return (
    <div className="space-y-6">
      <div>
        <RadioGroupField
          name="urgency"
          label="Degré d’urgence"
          options={options_urgency}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField name="firstname" label="Prénom" required />
        <FormField name="lastname" label="Nom" required />
      </div>

      <div>
        <label className="block">Date de naissance</label>
        <input
          type="date"
          {...register("dob", { required: true })}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Adresse */}
      <FormField name="address" label="Adresse" required />

      {/* NPA et Lieu */}
      <div className="grid grid-cols-2 gap-4">
        <FormField name="zipcode" label="NPA" type="number" required />
        <FormField name="city" label="Lieu" required />
      </div>

      {/* Commune de domicile & Depuis le */}
      <div className="grid grid-cols-2 gap-4">
        <FormField name="municapility" label="Commune de domicile" required />
        <div>
          <label className="block">Depuis le</label>
          <input
            type="date"
            {...register("from_date", { required: true })}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      {/* No. de téléphone */}
      <FormField name="telephone" label="No. de téléphone" required />

      {/* No. AVS */}
      <FormField name="avs_number" label="No. AVS" required />

      {/* Nom / prénom du conjoint */}
      <FormField name="partner_details" label="Nom / prénom du conjoint" required />

      {/* Noms / prénoms du père et de la mère */}
      <FormField name="parent_details" label="Noms / prénoms du père et de la mère" required />

      {/* Lieu de naissance & Confession */}
      <div className="grid grid-cols-2 gap-4">
        <FormField name="birthplace" label="Lieu de naissance" required />
        <FormField name="religion" label="Confession" required />
      </div>

      {/* Origine & Nationalite */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">Origine</label>
          <Select
            options={options_country}
            value={value}
            onChange={changeHandler}
            placeholder="Choisir un pays..."
          />
        </div>
        <FormField name="nationality" label="Nationalité" required />
      </div>

      {/* Mode de vie */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">Etat civil </label>
          <div className="mt-2 space-y-2">
            {options_relationship_status.map((label, idx) => (
              <div key={`${label}-${idx}`}>
                <input type="radio" value={label} {...register("relationship_status", {required: true})} className="mr-2" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <label className="block">Mode de vie</label>
          <div className="mt-2 space-y-2">
            {options_lifestyle.map((label, idx) => (
              <div key={`${label}-${idx}`} className="flex items-center">
                <input type="radio" value={label} {...register("lifestyle")} className="mr-2" />
                <span>{label}</span>
                {idx == 2 ? <Input className="ms-2" {...register("lifestyle_other")} /> : ""}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ancienne profession */}
      <FormField name="oldjob" label="Ancienne profession" required />

      {/* Provenance & Chambre */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">Provenance</label>
          <div className="mt-2 space-y-2">
            {options_provenence.map((label, idx) => (
              <div key={`${label}-${idx}`} className="flex items-center">
                <input type="radio" value={label} {...register("provenance")} className="mr-2" />
                <span>{label}</span>
                {idx == 2 ? <Input className="ms-2" {...register("lifestyle_other")} /> : ""}
              </div>
            ))}
          </div>
        </div>
        <div>
          <label className="block">Mode de vie</label>
          <div className="mt-2 space-y-2">
            {options_room.map((option, idx) => (
              <div key={`${option}-${idx}`} className="flex items-center">
                <input
                  type="checkbox"
                  id={`chambre-${idx}`}
                  value={option}
                  className="mr-2"
                />
                <label htmlFor={`chambre-${idx}`}>{option}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOne
