import React, { useMemo, useState } from "react"
import { useFormContext } from "react-hook-form"
import countryList from 'react-select-country-list'
import Select from "react-select"
import { Input } from "./ui/input"

const StepOne: React.FC = () => {
  const { register } = useFormContext()
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
        <label className="font-medium">Degré d’urgence <span className="text-red-500">(Required)</span></label>
        <div className="mt-2 space-y-2">
          {options_urgency.map((label, idx) => (
            <div key={idx}>
              <input type="radio" value={label} {...register("urgency")} className="mr-2" />
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

      <div>
        <label className="block">Date de naissance</label>
        <input
          type="date"
          {...register("dob", { required: true })}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Adresse */}
      <div>
        <label className="block">Adresse</label>
        <Input {...register("adresse", { required: true })}/>
      </div>

      {/* NPA et Lieu */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">NPA</label>
          <Input type="number" {...register("zipcode", { required: true })}/>
        </div>
        <div>
          <label className="block">Lieu</label>
          <Input {...register("city", { required: true })}/>
        </div>
      </div>

      {/* Commune de domicile & Depuis le */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">Commune de domicile</label>
          <Input {...register("municapility", { required: true })}/>
        </div>
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
      <div>
        <label className="block">No. de téléphone</label>
        <Input {...register("telephone", { required: true })}/>
      </div>

      {/* No. AVS */}
      <div>
        <label className="block">No. AVS</label>
        <Input {...register("avs_number", { required: true })}/>
      </div>

      {/* Nom / prénom du conjoint */}
      <div>
        <label className="block">Nom / prénom du conjoint</label>
        <Input {...register("partner_details", { required: true })}/>
      </div>

      {/* Noms / prénoms du père et de la mère */}
      <div>
        <label className="block">Noms / prénoms du père et de la mère</label>
        <Input {...register("parent_details", { required: true })}/>
      </div>

      {/* Lieu de naissance & Confession */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">Lieu de naissance</label>
          <Input {...register("birthplace", { required: true })}/>
        </div>
        <div>
          <label className="block">Confession</label>
          <Input {...register("religion", { required: true })}/>
        </div>
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
        <div>
          <label className="block">Nationalité</label>
          <Input {...register("nationality", { required: true })}/>
        </div>
      </div>
      
      {/* Mode de vie */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">Etat civil </label>
          <div className="mt-2 space-y-2">
            {options_relationship_status.map((label, idx) => (
              <div key={idx}>
                <input type="radio" value={label} {...register("relationship_status")} className="mr-2" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <label className="block">Mode de vie</label>
          <div className="mt-2 space-y-2">
              {options_lifestyle.map((label, idx) => (
                <div key={idx} className="flex items-center">
                  <input type="radio" value={label} {...register("lifestyle")} className="mr-2" />
                  <span>{label}</span>
                  {idx == 2 ? <Input className="ms-2" {...register("lifestyle_other")} /> : ""}
                </div>
              ))}
            </div>
        </div>
      </div>    

      {/* Ancienne profession */}
      <div>
        <label className="block">Ancienne profession</label>
        <Input {...register("oldjob", { required: true })}/>
      </div>

      {/* Provenance & Chambre */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">Provenance</label>
          <div className="mt-2 space-y-2">
            {options_provenence.map((label, idx) => (
              <div key={idx} className="flex items-center">
                <input type="radio" value={label} {...register("urgency")} className="mr-2" />
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
                <div key={idx} className="flex items-center">
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
