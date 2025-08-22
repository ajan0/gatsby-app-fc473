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
        mode: "onBlur",  // validate only after leaving the input
        reValidateMode: "onChange" // revalidate after changes
    })
    const [currentStep, setCurrentStep] = useState(0)

    const nextStep = async () => {
        const isStepValid = await methods.trigger(); // validate all registered fields
        if (isStepValid) {
            setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }
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
                    {currentStep === 2 && <StepThree />}
                    {currentStep === 3 && <StepFour />}

                    {/* Navigation */}
                    <div className="mt-6 flex justify-between">
                        {currentStep > 0 && (
                            <Button type="button" onClick={prevStep}>Retourner</Button>
                        )}
                        {currentStep < steps.length - 1 ? (
                            <Button type="button" onClick={nextStep} className="ml-auto">Suivant</Button>
                        ) : (
                            <Button type="submit" className="ml-auto">Envoyer</Button>
                        )}
                    </div>
                </form>
            </FormProvider>
        </div>
    )

}

export default AdmissionForm;