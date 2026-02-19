import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"

import { PrimaryButton } from "@/app/components/primary-button/primary-button"
import { SecondaryButton } from "@/app/components/secondary-button/secondary-button"

@Component({
  selector: "app-certificate-form",
  imports: [PrimaryButton, SecondaryButton, FormsModule],
  templateUrl: "./certificate-form.html",
  styleUrl: "./certificate-form.css",
})
export class CertificateForm {
  studentName = ""
  activityName = ""
  activities: string[] = ["Atividade 1", "Atividade 2", "Atividade 3"]
}
