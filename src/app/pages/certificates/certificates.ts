/** biome-ignore-all lint/style/useImportType: need to import the type for the constructor */
/** biome-ignore-all lint/style/useConsistentMemberAccessibility: need */

import { Component } from "@angular/core"
import { RouterLink } from "@angular/router"

import { SecondaryButton } from "@/app/components/secondary-button/secondary-button"
import { CertificateItem } from "@/app/components/certificate-item/certificate-item"

import { CertificateService } from "@/app/services/certificate"

@Component({
  selector: "app-certificates",
  imports: [SecondaryButton, CertificateItem, RouterLink],
  templateUrl: "./certificates.html",
  styleUrl: "./certificates.css",
})
export class Certificates {
  constructor(public certificateService: CertificateService) {}
}
