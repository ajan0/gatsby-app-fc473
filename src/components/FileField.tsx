// src/components/FileField.tsx
import React from "react"
import { useFormContext, useController } from "react-hook-form"

type Props = {
    name: string
    label: string
    required?: boolean
    accept?: string               // e.g. "application/pdf,image/*"
    maxSizeMB?: number            // default 25
    helper?: string
}

export const FileField: React.FC<Props> = ({
    name,
    label,
    required,
    accept = "application/pdf,image/*",
    maxSizeMB = 25,
    helper,
}) => {
    const { control } = useFormContext()

    const {
        field: { name: fieldName, onChange, onBlur, ref, value },
        fieldState: { error },
    } = useController({
        name,
        control,
        defaultValue: null,
        rules: {
            ...(required ? { required: `${label} est obligatoire` } : {}),
            validate: (file: File | null) => {
                if (!file) return true
                const okSize = file.size <= maxSizeMB * 1024 * 1024
                return okSize || `Taille max. ${maxSizeMB} MB`
            },
        },
    })

    const selected = value as File | null

    return (
        <div className="space-y-2">
            <label className="block font-medium">
                {label} {required && <span className="text-red-800">*</span>}
            </label>

            <input
                type="file"
                name={fieldName}
                accept={accept}
                onBlur={onBlur}
                ref={ref}
                onChange={(e) => onChange(e.target.files?.[0] ?? null)}
                className="block w-full rounded border px-3 py-2 bg-lime-100"
            />

            <div className="text-sm text-gray-600">
                {helper ?? `Taille max. des fichiers : ${maxSizeMB} MB.`}
                {selected && (
                    <span className="ml-2 text-gray-700">
                        — {selected.name} ({Math.round(selected.size / 1024)} ko)
                    </span>
                )}
            </div>

            {error && <p className="text-sm text-red-800">{String(error.message)}</p>}
        </div>
    )
}
