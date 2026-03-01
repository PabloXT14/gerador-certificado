/** biome-ignore-all lint/style/useImportType: need to import the type for the constructor */
import { Component, ElementRef, HostListener } from "@angular/core"
import { Router, RouterLink, RouterModule } from "@angular/router"
import { NgClass } from "@angular/common"

@Component({
  selector: "app-navbar",
  imports: [RouterLink, RouterModule, NgClass],
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.css",
})
export class Navbar {
  isOpen = false

  constructor(
    private router: Router,
    private elementRef: ElementRef
  ) {}

  isRouterActive(route: string) {
    return this.router.url === route
  }

  toggleMenu() {
    this.isOpen = !this.isOpen
  }

  closeMenu() {
    this.isOpen = false
  }

  // ✅ Fecha ao clicar fora
  @HostListener("document:click", ["$event"])
  onClickOutside(event: MouseEvent) {
    if (!this.isOpen) {
      return
    }

    const clickedInside = this.elementRef.nativeElement.contains(event.target)
    if (!clickedInside) {
      this.closeMenu()
    }
  }

  // ✅ Fecha mobile menu ao apertar ESC
  @HostListener("document:keydown.escape")
  onEscPressed() {
    if (this.isOpen) {
      this.closeMenu()
    }
  }
}
