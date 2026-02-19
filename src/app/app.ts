import { Component, signal } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { CommonModule } from "@angular/common"

import { Navbar } from "./components/navbar/navbar"
import { BaseLayout } from "./components/base-layout/base-layout"

@Component({
  selector: "app-root",
  imports: [RouterOutlet, Navbar, CommonModule, BaseLayout],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected readonly title = signal("gerador-certificado")
  showNavbar = true
}
