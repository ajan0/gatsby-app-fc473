import React, { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"
import { Button } from "./ui/button"
import StepFour from "./StepFour"

const steps = ["VOS DONNÉES", "REPRÉSENTANT", "DÉTAILS ADDITIONNELS", "DOCUMENTS"]

const AdmissionForm: React.FC = () => {
    const methods = useForm({
        mode: "onBlur",
        reValidateMode: "onChange",
    })

    const {
        formState: { isSubmitting },
    } = methods

    const [currentStep, setCurrentStep] = useState(0)
    const [success, setSuccess] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    const nextStep = async () => {
        const isStepValid = await methods.trigger(); // validate all registered fields
        if (isStepValid) {
            setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

    const onSubmit = async (data: any) => {
        const formData = new FormData();

        // Append all text fields
        Object.keys(data).forEach((key) => {
            if (key !== "doc_family_book") {
                formData.append(key, data[key] ?? "");
            }
        });

        // Append file field(s)
        if (data.doc_family_book) {
            formData.append("doc_family_book", data.doc_family_book);
            console.log('file appended')
        }

        try {
            const res = await fetch(`${process.env.GATSBY_API_URL}/admissions`, {
                method: "POST",
                body: formData,
            })

            if (!res.ok) {
                // try to surface backend validation/messages
                let msg = `Erreur serveur (${res.status})`
                try {
                    const j = await res.json()
                    msg = j.message || msg
                } catch { }
                throw new Error(msg)
            }

            setSuccess("Votre demande a été envoyée avec succès.")
            // methods.reset()
            // setCurrentStep(0)
            window.scrollTo({ top: 0, behavior: "smooth" })
        } catch (e: any) {
            setError(e?.message || "Échec de l’envoi. Veuillez réessayer.")
        }
    }

    return (
        <div className="mx-auto w-full max-w-screen-xl py-10">
            {/* Alerts */}
            {success && (
                <div className="mb-6 rounded border border-green-300 bg-green-50 p-3 text-green-800">
                    {success}
                </div>
            )}
            {error && (
                <div className="mb-6 rounded border border-red-300 bg-red-50 p-3 text-red-800">
                    {error}
                </div>
            )}

            <h1 className="text-3xl font-bold mb-6">Admission</h1>

            {/* Step Indicator */}
            <div className="flex justify-between mb-10">
                {steps.map((label, index) => (
                    <div
                        key={index}
                        className={`flex-1 text-center ${index === currentStep ? "font-bold text-blue-600" : "text-gray-500"
                            }`}
                    >
                        <div
                            className={`mx-auto w-8 h-8 rounded-full flex items-center justify-center mb-2 ${index === currentStep ? "bg-blue-600 text-white" : "bg-gray-300"
                                }`}
                        >
                            {index + 1}
                        </div>
                        {label}
                    </div>
                ))}
            </div>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    {currentStep === 0 && <StepOne />}
                    {currentStep === 1 && <StepTwo />}
                    {currentStep === 2 && <StepThree />}
                    {currentStep === 3 && <StepFour />}

                    {/* Navigation */}
                    <div className="mt-6 flex justify-between">
                        {currentStep > 0 && (
                            <Button type="button" variant="outline" onClick={prevStep}>Retourner</Button>
                        )}
                        {currentStep < steps.length - 1 ? (
                            <Button type="button" onClick={nextStep} className="ml-auto">Suivant</Button>
                        ) : (
                            <Button type="submit" className="ml-auto" disabled={isSubmitting}>{isSubmitting ? 'En cours...' : 'Envoyer'}</Button>
                        )}
                    </div>
                </form>
            </FormProvider>
        </div>
    )

}

export default AdmissionForm;