import { Component, Input, type OnInit } from "@angular/core"
// biome-ignore lint/style/useImportType: need to import the type for the constructor
import { Router } from "@angular/router"
import dayjs from "dayjs"

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

  constructor(private router: Router) {}

  redirectToCertificate() {
    this.router.navigate(["/certificados", this.certificateData.id])
    // or
    // this.router.navigateByUrl(`/certificados/${this.id}`)
  }

  ngOnInit(): void {
    this.formattedDate = dayjs(this.certificateData.createdAt).format(
      "DD/MM/YYYY"
    )
  }
}
