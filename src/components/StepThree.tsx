import React from "react"
import { useFormContext, useFieldArray } from "react-hook-form"
import { Input } from "./ui/input"

const StepThree: React.FC = () => {
    const { register, control, watch } = useFormContext()
    const { fields, append, remove } = useFieldArray({
        control,
        name: "incomes" // form field name for the array
    })

    const hasIncomes = watch("has_incomes") // Oui/Non radio

    const options_yesno = ['Oui', 'Non']

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block">Caisse Maladie</label>
                    <Input {...register("insurance", { required: true })} />
                </div>
                <div>
                    <label className="block">N° d’assuré</label>
                    <Input {...register("insured_num", { required: true })} />
                </div>
            </div>

            {/* Adresse complète */}
            <div>
                <label className="block">Adresse complète</label>
                <Input {...register("insurance_address", { required: true })} />
            </div>

            {/* Assurance complémentaire & N° d’assuré */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block">Assurance complémentaire</label>
                    <Input {...register("insurance_compl", { required: true })} />
                </div>
                <div>
                    <label className="block">N° d’assuré</label>
                    <Input {...register("insured_comp_num", { required: true })} />
                </div>
            </div>

            {/* Adresse complète */}
            <div>
                <label className="block">Adresse complète</label>
                <Input {...register("insurance_comp_address", { required: true })} />
            </div>

            {/* Assurance Accident & N° d’assuré */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block">Assurance Accident</label>
                    <Input {...register("insurance_acc", { required: true })} />
                </div>
                <div>
                    <label className="block">N° d’assuré</label>
                    <Input {...register("insured_acc_num", { required: true })} />
                </div>
            </div>

            {/* Adresse complète */}
            <div>
                <label className="block">Adresse complète</label>
                <Input {...register("insurance_acc_address", { required: true })} />
            </div>

            {/* Assurance RC */}
            <div>
                <label className="block">Assurance RC</label>
                <Input {...register("insurance_rc", { required: true })} />
            </div>

            <h2 className="text-3xl">Médecin traitant</h2>
            <p className="border-b-1 pb-2">(Le résidant peut faire appel à son médecin traitant si celui-ci se déplace à l’EMS du résidant)</p>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block">Nom</label>
                    <Input {...register("doctor_lastname", { required: true })} />
                </div>
                <div>
                    <label className="block">Prénom</label>
                    <Input {...register("doctor_firstname", { required: true })} />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label className="block">Adresse</label>
                    <Input {...register("doctor_address", { required: true })} />
                </div>
                <div>
                    <label className="block">NPA</label>
                    <Input type="number" {...register("doctor_zipcode", { required: true })} />
                </div>
                <div>
                    <label className="block">Lieu</label>
                    <Input {...register("doctor_city", { required: true })} />
                </div>
            </div>

            <div>
                <label className="block">Téléphone</label>
                <Input {...register("doctor_phone", { required: true })} />
            </div>


            <h2 className="text-3xl border-b-1">Pharmacie</h2>

            <div>
                <label className="block">Nom de la pharmacie</label>
                <Input {...register("pharmacy", { required: true })} />
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label className="block">Adresse</label>
                    <Input {...register("pharmacy_address", { required: true })} />
                </div>
                <div>
                    <label className="block">NPA</label>
                    <Input type="number" {...register("pharmacy_zipcode", { required: true })} />
                </div>
                <div>
                    <label className="block">Lieu</label>
                    <Input {...register("pharmacy_city", { required: true })} />
                </div>
            </div>

            <div>
                <label className="block">No. de téléphone</label>
                <Input {...register("pharmacy_phone", { required: true })} />
            </div>

            <div>
                <label className="block">Montant de votre rente AVS</label>
                <Input {...register("rente_amount", { required: true })} />
            </div>

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
                    {[...options_yesno, 'Demande en cours'].map((label, idx) => (
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
                                {...register(`revenus.${index}.nom`, { required: true })}
                            />
                            <div className="flex items-center gap-2">
                                <Input
                                    type="number"
                                    placeholder="Montant"
                                    {...register(`revenus.${index}.montant`, { required: true })}
                                />
                                {/* Add / Remove buttons */}
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

                    {/* Always have at least one row */}
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
