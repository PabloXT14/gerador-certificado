import { Component, type OnInit } from "@angular/core"
import { SecondaryButton } from "@/app/components/secondary-button/secondary-button"
import { RouterLink } from "@angular/router"

// biome-ignore lint/style/useImportType: need to import the type for the constructor
import { CertificateService } from "@/app/services/certificate"

@Component({
  selector: "app-certificate",
  imports: [SecondaryButton, RouterLink],
  templateUrl: "./certificate.html",
  styleUrl: "./certificate.css",
})
export class Certificate implements OnInit {
  constructor(private certificateService: CertificateService) {}

  ngOnInit(): void {
    console.log(this.certificateService.certificates)
  }
}
