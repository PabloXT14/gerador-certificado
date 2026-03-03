/** biome-ignore-all lint/style/useImportType: need to import the type for the constructor */

import { Component, Input, type OnInit } from "@angular/core"
import { Router } from "@angular/router"
import dayjs from "dayjs"

import { CertificateService } from "@/app/services/certificate"

import { SecondaryButton } from "../secondary-button/secondary-button"

import type { Certificate } from "@/app/interfaces/certificate"

@Component({
  selector: "app-certificate-item",
  imports: [SecondaryButton],
  templateUrl: "./certificate-item.html",
  styleUrl: "./certificate-item.css",
})
export class CertificateItem implements OnInit {
  @Input({ required: true }) certificateData!: Certificate
  formattedDate = ""

  constructor(
    private router: Router,
    private certificateService: CertificateService
  ) {}

  redirectToCertificate() {
    this.router.navigate(["/certificados", this.certificateData.id])
    // or
    // this.router.navigateByUrl(`/certificados/${this.id}`)
  }

  handleDeleteCertificate() {
    // biome-ignore lint/suspicious/noAlert: need to show the alert
    const shouldDelete = confirm(
      "Tem certeza que deseja excluir esse certificado? Essa ação é irreversível"
    )

    if (!shouldDelete) {
      return
    }

    this.certificateService.deleteCertificate(this.certificateData.id)
  }

  ngOnInit(): void {
    this.formattedDate = dayjs(this.certificateData.createdAt).format(
      "DD/MM/YYYY"
    )
  }
}
