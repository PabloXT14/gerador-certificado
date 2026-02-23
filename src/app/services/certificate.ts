import { Injectable } from "@angular/core"

import type { Certificate } from "../interfaces/certificate"

@Injectable({
  providedIn: "root",
})
export class CertificateService {
  certificates: Certificate[] = []

  addCertificate(certificate: Certificate) {
    this.certificates.push(certificate)

    console.log("CERTIFICATES: ", this.certificates)
  }
}
