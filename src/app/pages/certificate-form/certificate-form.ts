import { Component, ViewChild } from "@angular/core"
import { FormsModule, type NgForm, type NgModel } from "@angular/forms"
import { NgClass } from "@angular/common"
// biome-ignore lint/style/useImportType: need to import the type for the constructor
import { Router } from "@angular/router"

import { PrimaryButton } from "@/app/components/primary-button/primary-button"
import { SecondaryButton } from "@/app/components/secondary-button/secondary-button"

// biome-ignore lint/style/useImportType: need to import the type for the constructor
import { CertificateService } from "@/app/services/certificate"

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
    createdAt: "",
  }

  @ViewChild("form") form!: NgForm

  constructor(
    private certificateService: CertificateService,
    private router: Router
  ) {}

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

    const newCertificate = {
      ...this.certificate,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }

    this.certificateService.addCertificate(newCertificate)

    this.resetForm()

    this.router.navigate(["/certificados", newCertificate.id])
  }

  resetForm() {
    this.certificate = {
      id: "",
      studentName: "",
      activities: [],
      createdAt: "",
    }

    this.form.resetForm()
  }
}
