// src/components/StepFour.tsx
import React from "react"
import { FileField } from "./FileField"

const StepFour: React.FC = () => {
  return (
    <div className="space-y-8">
      <FileField
        name="doc_family_book"
        label="Copie du livret de famille ou certificat individuel d’état civil"
        required
      />

      {/* <FileField
        name="doc_insurance_card"
        label="Copie de la carte d'assuré caisse maladie de base et/ou complémentaire"
        required
      />

      <FileField
        name="doc_identity"
        label="Copie de la carte d'identité, permis d’établissement, passeport"
        required
      />

      <FileField
        name="doc_domicile_certificate"
        label="Attestation de domicile"
        required
      /> */}
    </div>
  )
}

export default StepFour
