import React from "react"
import { useFormContext, useFieldArray } from "react-hook-form"
import { Input } from "./ui/input"
import { FormField } from "./FormField"

const StepThree: React.FC = () => {
    const { register, control, watch } = useFormContext()
    const { fields, append, remove } = useFieldArray({
        control,
        name: "incomes", // form field name for the array
    })

    const hasIncomes = watch("has_incomes") // Oui/Non radio
    const options_yesno = ["Oui", "Non"]

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <FormField name="insurance" label="Caisse Maladie" required />
                <FormField name="insured_num" label="N° d’assuré" required />
            </div>

            {/* Adresse complète */}
            <FormField name="insurance_address" label="Adresse complète" required />

            {/* Assurance complémentaire & N° d’assuré */}
            <div className="grid grid-cols-2 gap-4">
                <FormField name="insurance_compl" label="Assurance complémentaire" required />
                <FormField name="insured_comp_num" label="N° d’assuré" required />
            </div>

            {/* Adresse complète */}
            <FormField name="insurance_comp_address" label="Adresse complète" required />

            {/* Assurance Accident & N° d’assuré */}
            <div className="grid grid-cols-2 gap-4">
                <FormField name="insurance_acc" label="Assurance Accident" required />
                <FormField name="insured_acc_num" label="N° d’assuré" required />
            </div>

            {/* Adresse complète */}
            <FormField name="insurance_acc_address" label="Adresse complète" required />

            {/* Assurance RC */}
            <FormField name="insurance_rc" label="Assurance RC" required />

            <h2 className="text-3xl">Médecin traitant</h2>
            <p className="border-b-1 pb-2">
                (Le résidant peut faire appel à son médecin traitant si celui-ci se déplace à l’EMS du résidant)
            </p>

            <div className="grid grid-cols-2 gap-4">
                <FormField name="doctor_lastname" label="Nom" required />
                <FormField name="doctor_firstname" label="Prénom" required />
            </div>

            <div className="grid grid-cols-3 gap-4">
                <FormField name="doctor_address" label="Adresse" required />
                <FormField name="doctor_zipcode" label="NPA" type="number" required />
                <FormField name="doctor_city" label="Lieu" required />
            </div>

            <FormField name="doctor_phone" label="Téléphone" required />

            <h2 className="text-3xl border-b-1">Pharmacie</h2>

            <FormField name="pharmacy" label="Nom de la pharmacie" required />

            <div className="grid grid-cols-3 gap-4">
                <FormField name="pharmacy_address" label="Adresse" required />
                <FormField name="pharmacy_zipcode" label="NPA" type="number" required />
                <FormField name="pharmacy_city" label="Lieu" required />
            </div>

            <FormField name="pharmacy_phone" label="No. de téléphone" required />

            <FormField name="rente_amount" label="Montant de votre rente AVS" required />

            <div>
                <label className="font-medium">Recevez-vous des Prestations Complémentaires AVS ?</label>
                <div className="mt-2 space-y-2">
                    {options_yesno.map((label, idx) => (
                        <div key={idx}>
                            <input type="radio" value={label} {...register("prestation_complemtaire")} className="mr-2" />
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <label className="font-medium">Recevez-vous une Rente d'Impotence ?</label>
                <div className="mt-2 space-y-2">
                    {[...options_yesno, "Demande en cours"].map((label, idx) => (
                        <div key={idx}>
                            <input type="radio" value={label} {...register("rente_impotence")} className="mr-2" />
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <label className="font-medium">Recevez-vous d'autres rentes, pensions ou revenus ?</label>
                <div className="mt-2 space-y-2">
                    {options_yesno.map((label, idx) => (
                        <div key={idx}>
                            <input type="radio" value={label} {...register("has_incomes")} className="mr-2" />
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Conditional block */}
            {hasIncomes === "Oui" && (
                <div>
                    <p className="font-medium mt-4">Lesquels</p>
                    <div className="grid grid-cols-2 gap-4 font-semibold">
                        <span>Nom</span>
                        <span>Montant</span>
                    </div>

                    {fields.map((field, index) => (
                        <div key={field.id} className="grid grid-cols-2 gap-4 items-center mb-2">
                            <Input
                                placeholder="Nom"
                                {...register(`incomes.${index}.nom`, { required: true })}
                            />
                            <div className="flex items-center gap-2">
                                <Input
                                    type="number"
                                    placeholder="Montant"
                                    {...register(`incomes.${index}.montant`, { required: true })}
                                />
                                <button
                                    type="button"
                                    onClick={() => append({ nom: "", montant: "" })}
                                    className="px-2 border rounded"
                                >
                                    ➕
                                </button>
                                <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    className="px-2 border rounded"
                                >
                                    ➖
                                </button>
                            </div>
                        </div>
                    ))}

                    {fields.length === 0 && (
                        <button
                            type="button"
                            onClick={() => append({ nom: "", montant: "" })}
                            className="mt-2 px-3 py-1 border rounded"
                        >
                            Ajouter un revenu
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

export default StepThree
