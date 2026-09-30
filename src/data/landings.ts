// Landings por rubro publicadas en chatbotia.cl. Al crear una nueva, agrégala aquí:
// la home (tarjetas de rubros y pie de página) y las demás landings la enlazan solas.
export interface Landing {
  key: string;    // identificador corto
  href: string;   // ruta con / final
  label: string;  // texto del enlace
  short: string;  // "Ver chatbot para {short}"
}

export const landings: Landing[] = [
  { key: "abogados", href: "/abogados/", label: "Chatbot con IA para abogados", short: "abogados" },
  { key: "estetica", href: "/estetica/", label: "Chatbot con IA para centros de estética", short: "centros de estética" },
];
