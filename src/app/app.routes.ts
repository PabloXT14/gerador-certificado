import type { Routes } from "@angular/router"

import { Certificates } from "./pages/certificates/certificates"
import { CertificateForm } from "./pages/certificate-form/certificate-form"
import { CertificateComponent } from "./pages/certificate/certificate"

export const routes: Routes = [
  {
    path: "",
    component: Certificates,
  },
  {
    path: "certificados/novo",
    component: CertificateForm,
  },
  {
    path: "certificados/:id",
    component: CertificateComponent,
  },
]
