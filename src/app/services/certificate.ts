import { Injectable } from "@angular/core"

import type { Certificate } from "../interfaces/certificate"

const STORAGE_KEY = "certificates"

@Injectable({
  providedIn: "root",
})
export class CertificateService {
  certificates: Certificate[] = []

  addCertificate(certificate: Certificate) {
    this.certificates.push({ ...certificate })

    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.certificates))
  }

  getCertificateById(id: string) {
    return this.certificates.find((certificate) => certificate.id === id)
  }

  loadDataFromStorage() {
    const data = localStorage.getItem(STORAGE_KEY)

    if (data) {
      this.certificates = JSON.parse(data)
    }
  }
}
