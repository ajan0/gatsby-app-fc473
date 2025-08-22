import React from "react"
import { useFormContext, useController } from "react-hook-form"

type Props = {
    name: string
    label: string
    options: string[]
    required?: boolean
}

export const RadioGroupField: React.FC<Props> = ({ name, label, options, required }) => {
    const { control } = useFormContext()
    const { field, fieldState: { error } } = useController({
        name,
        control,
        rules: required ? { required: `${label} est obligatoire` } : undefined,
    })

    return (
        <div>
            <label className="font-medium">
                {label} {required && <span className="text-sm text-red-800">(obligatoire)</span>}
            </label>
            <div className="mt-2 space-y-2">
                {options.map((opt, i) => (
                    <div className="flex ">
                        <input
                            id={`${field.name}-${opt}`}
                            type="radio"
                            value={opt}
                            checked={field.value === opt}
                            onChange={() => field.onChange(opt)}
                            onBlur={field.onBlur}
                            name={field.name}
                            className="mr-2"
                        />
                        <label key={i} htmlFor={`${field.name}-${opt}`} className="flex items-center">{opt}</label>
                    </div>
                ))}
            </div>
            {error && <p className="text-red-800 text-sm">{String(error.message)}</p>}
        </div>
    )
}