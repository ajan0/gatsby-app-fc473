import React, { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"

const steps = ["VOS DONNÉES", "REPRÉSENTANT", "DÉTAILS ADDITIONNELS", "DOCUMENTS"]

const AdmissionForm: React.FC = () => {
    const methods = useForm()
    const [currentStep, setCurrentStep] = useState(0)

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

    const onSubmit = (data: any) => {
        console.log("Final Submission", data)
        // TODO: Send to Laravel API
    }

    return (
        <div className="mx-auto w-full max-w-screen-xl py-10">
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

                    {/* Navigation */}
                    <div className="mt-6 flex justify-between">
                        {currentStep > 0 && (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="px-4 py-2 bg-gray-300 rounded"
                            >
                                Retourner
                            </button>
                        )}
                        {currentStep < steps.length - 1 ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="ml-auto px-4 py-2 bg-blue-600 text-white rounded"
                            >
                                Suivant
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="ml-auto px-4 py-2 bg-green-600 text-white rounded"
                            >
                                Envoyer
                            </button>
                        )}
                    </div>
                </form>
            </FormProvider>
        </div>
    )

}

export default AdmissionForm;