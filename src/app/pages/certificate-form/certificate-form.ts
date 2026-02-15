import { Component } from "@angular/core"
import { PrimaryButton } from "@/app/components/primary-button/primary-button"
import { SecondaryButton } from "@/app/components/secondary-button/secondary-button"

@Component({
  selector: "app-certificate-form",
  imports: [PrimaryButton, SecondaryButton],
  templateUrl: "./certificate-form.html",
  styleUrl: "./certificate-form.css",
})
export class CertificateForm {}
