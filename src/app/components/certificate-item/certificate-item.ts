import { Component, Input } from "@angular/core"
// biome-ignore lint/style/useImportType: need to import the type for the constructor
import { Router } from "@angular/router"

import { SecondaryButton } from "../secondary-button/secondary-button"

@Component({
  selector: "app-certificate-item",
  imports: [SecondaryButton],
  templateUrl: "./certificate-item.html",
  styleUrl: "./certificate-item.css",
})
export class CertificateItem {
  @Input() id = ""

  constructor(private router: Router) {}

  redirectToCertificate() {
    this.router.navigate(["/certificados", this.id])
    // or
    // this.router.navigateByUrl(`/certificados/${this.id}`)
  }
}
