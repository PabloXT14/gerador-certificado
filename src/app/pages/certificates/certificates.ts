import { Component, type OnInit } from "@angular/core"
import { SecondaryButton } from "@/app/components/secondary-button/secondary-button"
import { CertificateItem } from "@/app/components/certificate-item/certificate-item"
import { RouterLink } from "@angular/router"

// biome-ignore lint/style/useImportType: need to import the type for the constructor
import { CertificateService } from "@/app/services/certificate"

import type { Certificate } from "@/app/interfaces/certificate"

@Component({
  selector: "app-certificates",
  imports: [SecondaryButton, CertificateItem, RouterLink],
  templateUrl: "./certificates.html",
  styleUrl: "./certificates.css",
})
export class Certificates implements OnInit {
  certificates: Certificate[] = []

  constructor(private certificateService: CertificateService) {}

  ngOnInit(): void {
    this.certificates = this.certificateService.certificates
  }
}
