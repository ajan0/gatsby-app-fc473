import React from "react"
import { useFormContext } from "react-hook-form"

const StepTwo: React.FC = () => {
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
          <label className="block">First Name</label>
          <input
            type="text"
            {...register("firstName", { required: true })}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block">Last Name</label>
          <input
            type="text"
            {...register("lastName", { required: true })}
            className="w-full border rounded px-3 py-2"
          />
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

      <div>
        <label className="block">Adresse</label>
        <input
          type="text"
          {...register("adresse", { required: true })}
          className="w-full border rounded px-3 py-2"
        />
      </div>
    </div>
  )
}

export default StepTwo
