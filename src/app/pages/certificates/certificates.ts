import { Component } from "@angular/core"
import { SecondaryButton } from "@/app/components/secondary-button/secondary-button"
import { CertificateItem } from "@/app/components/certificate-item/certificate-item"
import { RouterLink } from "@angular/router"

@Component({
  selector: "app-certificates",
  imports: [SecondaryButton, CertificateItem, RouterLink],
  templateUrl: "./certificates.html",
  styleUrl: "./certificates.css",
})
export class Certificates {
  isEmpty = true
}
