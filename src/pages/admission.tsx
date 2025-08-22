import * as React from "react"
import type { PageProps, HeadFC } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import AdmissionForm from "../components/AdmissionForm"

const AdmissionPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Header />
        <main>
            <AdmissionForm />
        </main>
      <Footer />
    </div>
  )
}

export default AdmissionPage

export const Head: HeadFC = () => (
  <title>Résidence des Oliviers</title>
)
