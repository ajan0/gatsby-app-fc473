import React from "react"
import { useFormContext, useController } from "react-hook-form"
import { Input } from "./ui/input"
import { useTranslation } from "react-i18next"

interface FormFieldProps {
    name: string
    label: string
    type?: string
    required?: boolean
}

export const FormField: React.FC<FormFieldProps> = ({ name, label, type = "text", required }) => {
    const { t } = useTranslation()
    const { control } = useFormContext()

    const {
        field,                 // { onChange, onBlur, value, ref, name }
        fieldState: { error }, // current error for THIS field only
    } = useController({
        name,
        control,
        rules: required ? { required: `${label} est obligatoire` } : undefined,
    })

    return (
        <div>
            <label className="block font-medium">
                {label} {required && <span className="text-sm text-red-800">{t('(obligatoire)')}</span>}
            </label>
            <Input type={type} {...field} />
            {error && <p className="text-red-800 text-sm">{String(error.message)}</p>}
        </div>
    )
}
