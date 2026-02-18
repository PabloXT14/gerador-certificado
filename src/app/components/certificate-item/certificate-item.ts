import { Component } from "@angular/core"
import { SecondaryButton } from "../secondary-button/secondary-button"
import { RouterLink } from "@angular/router"

@Component({
  selector: "app-certificate-item",
  imports: [SecondaryButton, RouterLink],
  templateUrl: "./certificate-item.html",
  styleUrl: "./certificate-item.css",
})
export class CertificateItem {
  id = 1
}
