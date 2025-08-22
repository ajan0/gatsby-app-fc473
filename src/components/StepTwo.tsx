import React from "react"
import { useFormContext } from "react-hook-form"
import { FormField } from "./FormField"

const StepTwo: React.FC = () => {
  const { register, watch } = useFormContext()

  const otherContact = watch("other_contact")

  const options_yesno = ["Oui", "Non"]
  const options_representative = ["administratif", "et/ou thérapeutique"]
  const options_relationship = ["Epoux(se)", "Fils (fille)", "Représ.légal", "Autre"]

  return (
    <div className="space-y-6">
      <div>
        <label className="font-medium">Représentant (Facturation, principal contact)</label>
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
        <FormField name="rep_firstname" label="Prénom" required />
        <FormField name="rep_lastname" label="Nom" required />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <FormField name="rep_address" label="Adresse" required />
        <FormField name="rep_zipcode" label="NPA" type="number" required />
        <FormField name="rep_city" label="Lieu" required />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField name="rep_telephone_private" label="Téléphone privé" required />
        <FormField name="rep_telephone_prof" label="Téléphone prof." required />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField name="rep_telephone_mobile" label="Téléphone mobile" required />
        <FormField name="rep_email" label="E-mail" required />
      </div>

      {/* Lien de parenté */}
      <div>
        <label className="font-medium">Lien de parenté</label>
        <div className="mt-2 space-y-2">
          {options_relationship.map((label, idx) => (
            <div key={idx} className="flex items-center">
              <input type="radio" value={label} {...register("rep_relationship")} className="mr-2" />
              <span>{label}</span>
              {idx === 2 ? (
                <FormField name="lifestyle_other" label="" />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {/* Adressage de la facture et du courrier administratif */}
      <div>
        <label className="font-medium">Adressage de la facture et du courrier administratif</label>
        <div className="mt-2 space-y-2">
          {options_yesno.map((label, idx) => (
            <div key={idx}>
              <input type="radio" value={label} {...register("adressage_admin")} className="mr-2" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Autres contacts */}
      <div>
        <label className="font-medium">Autres contacts</label>
        <div className="mt-2 space-y-2">
          {options_yesno.map((label, idx) => (
            <div key={idx}>
              <input type="radio" value={label} {...register("other_contact")} className="mr-2" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Conditional to "Autres contacts" */}
      {otherContact === "Oui" && (
        <div className="space-y-4 p-4 border rounded bg-gray-50">
          <div>
            <label className="font-medium">Représentant (Facturation, principal contact)</label>
            <div className="mt-2 space-y-2">
              {options_representative.map((label, idx) => (
                <div key={idx}>
                  <input
                    type="radio"
                    value={label}
                    {...register("other_rep_representative")}
                    className="mr-2"
                  />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField name="other_rep_firstname" label="Prénom" required />
            <FormField name="other_rep_lastname" label="Nom" required />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <FormField name="other_rep_address" label="Adresse" required />
            <FormField name="other_rep_zipcode" label="NPA" type="number" required />
            <FormField name="other_rep_city" label="Lieu" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField name="other_rep_telephone_private" label="Téléphone privé" required />
            <FormField name="other_rep_telephone_prof" label="Téléphone prof." required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField name="other_rep_telephone_mobile" label="Téléphone mobile" required />
            <FormField name="other_rep_email" label="E-mail" required />
          </div>

          {/* Lien de parenté */}
          <div>
            <label className="font-medium">Lien de parenté</label>
            <div className="mt-2 space-y-2">
              {options_relationship.map((label, idx) => (
                <div key={idx} className="flex items-center">
                  <input
                    type="radio"
                    value={label}
                    {...register("other_rep_relationship")}
                    className="mr-2"
                  />
                  <span>{label}</span>
                  {idx === 2 ? (
                    <FormField name="other_rep_relationship_other" label="" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          {/* Adressage de la facture et du courrier administratif */}
          <div>
            <label className="font-medium">Adressage de la facture et du courrier administratif</label>
            <div className="mt-2 space-y-2">
              {options_yesno.map((label, idx) => (
                <div key={idx}>
                  <input
                    type="radio"
                    value={label}
                    {...register("other_rep_adressage_admin")}
                    className="mr-2"
                  />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StepTwo
