import { Component } from "@angular/core"
import { SecondaryButton } from "@/app/components/secondary-button/secondary-button"
import { RouterLink } from "@angular/router"

@Component({
  selector: "app-certificate",
  imports: [SecondaryButton, RouterLink],
  templateUrl: "./certificate.html",
  styleUrl: "./certificate.css",
})
export class Certificate {}
