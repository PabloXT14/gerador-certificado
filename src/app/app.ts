import { Component, signal } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { CommonModule } from "@angular/common"

import { Navbar } from "./components/navbar/navbar"
import { PrimaryButton } from "./components/primary-button/primary-button"

@Component({
  selector: "app-root",
  imports: [RouterOutlet, Navbar, CommonModule, PrimaryButton],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected readonly title = signal("gerador-certificado")
  showNavbar = true
}
