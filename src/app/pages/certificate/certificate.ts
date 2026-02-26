import {
  Component,
  type ElementRef,
  ViewChild,
  type OnInit,
} from "@angular/core"
import { SecondaryButton } from "@/app/components/secondary-button/secondary-button"
// biome-ignore lint/style/useImportType: need to import the type for the constructor
import { ActivatedRoute, RouterLink } from "@angular/router"
import dayjs from "dayjs"
import html2canvas from "html2canvas"

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
  formattedDate = ""
  @ViewChild("certificateContainer") certificateContainer!: ElementRef

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

      if (this.certificate) {
        this.formattedDate = dayjs(this.certificate.createdAt).format(
          "DD/MM/YYYY"
        )
      }
    })
  }

  downloadCertificate() {
    if (!this.certificate) {
      return
    }

    html2canvas(this.certificateContainer.nativeElement, { scale: 2 }).then(
      (canvas) => {
        const img = canvas.toDataURL("image/png") // convert canvas to image
        const link = document.createElement("a") // create download link

        link.download = `certificado-${this.certificate?.studentName.toLocaleLowerCase().replaceAll(" ", "-")}.png` // set download name
        link.href = img // set image source
        link.click() // trigger download
      }
    )
  }
}
