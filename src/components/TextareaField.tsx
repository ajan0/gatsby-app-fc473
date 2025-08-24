import React from "react"
import { useFormContext, useController } from "react-hook-form"
import { Textarea } from "./ui/textarea"

interface TextareaFieldProps {
    name: string
    label: string
    required?: boolean
}

export const TextareaField: React.FC<TextareaFieldProps> = ({ name, label, required }) => {
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
                {label} {required && <span className="text-sm text-red-800">(obligatoire)</span>}
            </label>
            <Textarea {...field} />
            {error && <p className="text-red-800 text-sm">{String(error.message)}</p>}
        </div>
    )
}
