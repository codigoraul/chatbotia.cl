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
  { key: "automotoras", href: "/automotoras/", label: "Chatbot con IA para automotoras y rent a car", short: "automotoras y rent a car" },
  { key: "dentistas", href: "/dentistas/", label: "Chatbot con IA para dentistas", short: "dentistas" },
  { key: "psicologos", href: "/psicologos/", label: "Chatbot con IA para psicólogos", short: "psicólogos" },
  { key: "inmobiliarias", href: "/inmobiliarias/", label: "Chatbot con IA para inmobiliarias y corredores", short: "inmobiliarias y corredores" },
  { key: "veterinarias", href: "/veterinarias/", label: "Chatbot con IA para veterinarias", short: "veterinarias" },
];

// Landings por ciudad (chatbotia.cl/<ciudad>/). Al crear una nueva, agrégala aquí.
export interface Ciudad {
  key: string;
  href: string;
  label: string;
}

export const ciudades: Ciudad[] = [
  { key: "la-serena", href: "/la-serena/", label: "Chatbot con IA en La Serena" },
  { key: "antofagasta", href: "/antofagasta/", label: "Chatbot con IA en Antofagasta" },
  { key: "arica", href: "/arica/", label: "Chatbot con IA en Arica" },
  { key: "concepcion", href: "/concepcion/", label: "Chatbot con IA en Concepción" },
  { key: "santiago", href: "/santiago/", label: "Chatbot con IA en Santiago" },
  { key: "valparaiso", href: "/valparaiso/", label: "Chatbot con IA en Valparaíso y Viña del Mar" },
  { key: "puerto-montt", href: "/puerto-montt/", label: "Chatbot con IA en Puerto Montt" },
];
