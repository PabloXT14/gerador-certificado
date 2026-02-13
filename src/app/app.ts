import { Component, signal } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { CommonModule } from "@angular/common"

import { Navbar } from "./components/navbar/navbar"
import { PrimaryButton } from "./components/primary-button/primary-button"
import { SecondaryButton } from "./components/secondary-button/secondary-button"
import { CertificateItem } from "./components/certificate-item/certificate-item"

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    Navbar,
    CommonModule,
    PrimaryButton,
    SecondaryButton,
    CertificateItem,
  ],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected readonly title = signal("gerador-certificado")
  showNavbar = true
}
