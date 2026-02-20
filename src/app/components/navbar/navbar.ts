import { Component } from "@angular/core"
// biome-ignore lint/style/useImportType: need to import the type for the constructor
import { Router, RouterLink, RouterModule } from "@angular/router"
import { NgClass } from "@angular/common"

@Component({
  selector: "app-navbar",
  imports: [RouterLink, RouterModule, NgClass],
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.css",
})
export class Navbar {
  constructor(private router: Router) {}

  isRouterActive(route: string) {
    return this.router.url === route
  }
}
