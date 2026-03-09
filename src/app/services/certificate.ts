import { effect, Injectable, signal } from "@angular/core"

import type { Certificate } from "../interfaces/certificate"

@Injectable({
  providedIn: "root",
})
export class CertificateService {
  private readonly STORAGE_KEY = "certificates"

  // 🔥 Estado reativo global
  private _certificates = signal<Certificate[]>([])

  // 👇 expõe somente leitura para os componentes
  readonly certificates = this._certificates.asReadonly()

  constructor() {
    // 1. Primeiro carrega do localStorage
    this._certificates.set(this.loadDataFromStorage())

    // 🔄 Salva automaticamente no localStorage sempre que o signal mudar
    // 2. Depois registra o effect (dentro do construtor = injection context válido)
    effect(() => {
      const list = this._certificates()

      if (list !== undefined && list !== null) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list))
      }
    })
  }

  addCertificate(certificate: Certificate) {
    this._certificates.update((list) => [certificate, ...list])
  }

  getCertificateById(id: string) {
    return this._certificates().find((certificate) => certificate.id === id)
  }

  deleteCertificate(id: string) {
    this._certificates.update((list) =>
      list.filter((certificate) => certificate.id !== id)
    )
  }

  loadDataFromStorage(): Certificate[] {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY)

      if (!data || data === "undefined" || data === "null") {
        return []
      }

      return JSON.parse(data)
    } catch (_error) {
      localStorage.removeItem(this.STORAGE_KEY) // limpa o valor corrompido
      return []
    }
  }
}
