import { Component } from "@angular/core"
import { FormsModule, type NgModel } from "@angular/forms"
import { NgClass } from "@angular/common"

import { PrimaryButton } from "@/app/components/primary-button/primary-button"
import { SecondaryButton } from "@/app/components/secondary-button/secondary-button"
import type { Certificate } from "@/app/interfaces/certificate"

@Component({
  selector: "app-certificate-form",
  imports: [PrimaryButton, SecondaryButton, FormsModule, NgClass],
  templateUrl: "./certificate-form.html",
  styleUrl: "./certificate-form.css",
})
export class CertificateForm {
  activityName = ""

  certificate: Certificate = {
    id: "",
    studentName: "",
    activities: [],
  }

  isFieldInvalid(control: NgModel) {
    return control.invalid && control.touched
  }

  isFormInvalid() {
    return (
      !this.certificate.studentName || this.certificate.activities.length === 0
    )
  }

  addActivity() {
    this.certificate.activities.push(this.activityName)
    this.activityName = ""
  }

  removeActivity(index: number) {
    this.certificate.activities.splice(index, 1)
  }

  onSubmit() {
    if (this.isFormInvalid()) {
      return
    }

    this.certificate = {
      ...this.certificate,
      id: crypto.randomUUID(),
    }

    console.log("CERTIFICATE: ", this.certificate)
  }
}
