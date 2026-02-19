import { Component } from "@angular/core"
import { FormsModule, type NgModel } from "@angular/forms"
import { NgClass } from "@angular/common"

import { PrimaryButton } from "@/app/components/primary-button/primary-button"
import { SecondaryButton } from "@/app/components/secondary-button/secondary-button"

@Component({
  selector: "app-certificate-form",
  imports: [PrimaryButton, SecondaryButton, FormsModule, NgClass],
  templateUrl: "./certificate-form.html",
  styleUrl: "./certificate-form.css",
})
export class CertificateForm {
  studentName = ""
  activityName = ""
  activities: string[] = ["Atividade 1", "Atividade 2", "Atividade 3"]

  isFieldInvalid(control: NgModel) {
    return control.invalid && control.touched
  }
}
