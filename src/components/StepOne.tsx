import React from "react"
import { useFormContext } from "react-hook-form"

const StepOne: React.FC = () => {
  const { register } = useFormContext()

  return (
    <div className="space-y-6">
      <div>
        <label className="font-medium">Degré d’urgence <span className="text-red-500">(Required)</span></label>
        <div className="mt-2 space-y-2">
          {[
            "Entrée urgente",
            "Entrée dans 1 mois",
            "Entrée dans les 3 mois",
            "Entrée dans les 6 mois",
            "Être inscrit sur la liste d’attente",
            "Other",
          ].map((label, idx) => (
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
          <input
            type="text"
            {...register("prenom", { required: true })}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block">Nom</label>
          <input
            type="text"
            {...register("nom", { required: true })}
            className="w-full border rounded px-3 py-2"
          />
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
        <input
          type="text"
          {...register("adresse", { required: true })}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* NPA et Lieu */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">NPA</label>
          <input
            type="number"
            {...register("zipcode", { required: true })}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block">Lieu</label>
          <input
            type="text"
            {...register("city", { required: true })}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      {/* Commune de domicile & Depuis le */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">Commune de domicile</label>
          <input
            type="number"
            {...register("municapility", { required: true })}
            className="w-full border rounded px-3 py-2"
          />
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
        <input
          type="text"
          {...register("telephone", { required: true })}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* No. AVS */}
      <div>
        <label className="block">No. AVS</label>
        <input
          type="text"
          {...register("avs_number", { required: true })}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Nom / prénom du conjoint */}
      <div>
        <label className="block">Nom / prénom du conjoint</label>
        <input
          type="text"
          {...register("partner_details", { required: true })}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Noms / prénoms du père et de la mère */}
      <div>
        <label className="block">Noms / prénoms du père et de la mère</label>
        <input
          type="text"
          {...register("parent_details", { required: true })}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Lieu de naissance & Confession */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">Lieu de naissance</label>
          <input
            type="number"
            {...register("birthplace", { required: true })}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block">Confession</label>
          <input
            type="date"
            {...register("religion", { required: true })}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>

    </div>
  )
}

export default StepOne
