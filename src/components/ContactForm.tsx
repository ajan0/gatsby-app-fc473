import React, { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { FormField } from "./FormField"
import { TextareaField } from "./TextareaField"
import { Button } from "./ui/button"
import { useTranslation } from "react-i18next" 

const ContactForm: React.FC = () => {
  const { t } = useTranslation()
    const methods = useForm({
        mode: "onBlur",
        reValidateMode: "onChange",
    })

    const {
        formState: { isSubmitting },
    } = methods

    const [success, setSuccess] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)


    const onSubmit = async (data: any) => {

        try {
            const res = await fetch(`${process.env.GATSBY_API_URL}/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(methods.getValues()),
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

            setSuccess("Votre message a été envoyée avec succès.")
            methods.reset()
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

            <h2 className="text-3xl font-bold mb-6">Contact</h2>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-3">
                    <FormField name="email" label={t('E-mail')} type="email" required />
                    <TextareaField name="message" label="Message" required />
                    <Button type="submit" disabled={isSubmitting}>{isSubmitting ? t('En cours...') : t('Envoyer')}</Button>
                </form>
            </FormProvider>
        </div>
    )

}

export default ContactForm;