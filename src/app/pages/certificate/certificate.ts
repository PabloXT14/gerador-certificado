import { Component, type OnInit } from "@angular/core"
import { SecondaryButton } from "@/app/components/secondary-button/secondary-button"
// biome-ignore lint/style/useImportType: need to import the type for the constructor
import { ActivatedRoute, RouterLink } from "@angular/router"

// biome-ignore lint/style/useImportType: need to import the type for the constructor
import { CertificateService } from "@/app/services/certificate"

import type { Certificate } from "@/app/interfaces/certificate"

@Component({
  selector: "app-certificate",
  imports: [SecondaryButton, RouterLink],
  templateUrl: "./certificate.html",
  styleUrl: "./certificate.css",
})
export class CertificateComponent implements OnInit {
  certificateId: string | null = null
  certificate: Certificate | undefined

  constructor(
    private certificateService: CertificateService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((param) => {
      this.certificateId = param.get("id")

      if (this.certificateId) {
        this.certificate = this.certificateService.getCertificateById(
          this.certificateId
        )
      }
    })

    console.log("CERTIFICATE: ", this.certificate)
  }
}
