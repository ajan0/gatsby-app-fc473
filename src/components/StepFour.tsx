// src/components/StepFour.tsx
import React from "react"
import { FileField } from "./FileField"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"

const StepFour: React.FC = () => {
  return (
    <div className="space-y-8">
      <FileField
        name="doc_family_book"
        label="Copie du livret de famille ou certificat individuel d’état civil"
        required
      />

      <FileField
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
      />

      <FileField
        name="doc_rente_impotence"
        label="Copie de la décision pour rente d'impotence (si accordée)"
      />

      <FileField
        name="doc_procuration"
        label="Copie de la procuration si vous avez un représentant légal"
      />

      <FileField
        name="doc_decision_curatelle"
        label="Copie de la décision de curatelle (si existante)"
      />

      <FileField
        name="doc_police_rc"
        label="Copie de la police d'assurance RC"
        required
      />

      <div className="flex flex-col gap-3">
        <strong>La demande d'admission ne sera prise en considération que si elle est complète et accompagnée de tous les documents demandés.</strong>
        <div className="flex gap-2 items-center">
          <Checkbox
            id="consent"
          />
          <Label htmlFor="consent">Je soussigné(e), certifie l'exactitude des renseignements donnés ci-dessus.</Label>
        </div>
      </div>

    </div>
  )
}

export default StepFour
