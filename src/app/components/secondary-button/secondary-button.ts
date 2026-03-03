import { Component, Input } from "@angular/core"
import { twMerge } from "tailwind-merge"
import { NgClass } from "@angular/common"

@Component({
  selector: "app-secondary-button",
  imports: [NgClass],
  templateUrl: "./secondary-button.html",
  styleUrl: "./secondary-button.css",
})
export class SecondaryButton {
  @Input() label = ""
  @Input() phClass = ""
  @Input() className = ""
  @Input() disabled = false

  get containerClasses() {
    return twMerge(
      "flex h-10 w-full flex-row items-center justify-center gap-2 rounded-md bg-blue-dark px-4 py-2.5 font-semibold text-sm text-white transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",
      this.className
    )
  }
}
