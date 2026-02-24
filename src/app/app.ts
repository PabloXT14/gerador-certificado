import { Component, type OnInit, signal } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { CommonModule } from "@angular/common"

import { Navbar } from "./components/navbar/navbar"
import { BaseLayout } from "./components/base-layout/base-layout"

// biome-ignore lint/style/useImportType: need to import the type for the constructor
import { CertificateService } from "./services/certificate"

@Component({
  selector: "app-root",
  imports: [RouterOutlet, Navbar, CommonModule, BaseLayout],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App implements OnInit {
  protected readonly title = signal("gerador-certificado")

  constructor(private certificateService: CertificateService) {}

  ngOnInit(): void {
    this.certificateService.loadDataFromStorage()
  }
}
