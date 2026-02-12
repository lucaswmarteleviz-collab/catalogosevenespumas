export const DENSITIES = [
  {
    id: 'D23',
    name: 'D23',
    label: 'Macia',
    pricePerM3: 815.76,
    pricePerM2Per1cm: 8.16,
    color: 'from-green-400 to-emerald-500',
    colorBg: 'bg-green-400/10',
    colorText: 'text-green-400',
    colorBorder: 'border-green-400/30',
    icon: 'fa-cloud',
    description: 'Ideal para encostos, almofadas decorativas e proteção.',
    useCases: ['Encostos de sofá', 'Almofadas decorativas', 'Embalagens de proteção', 'Artesanato'],
  },
  {
    id: 'D28',
    name: 'D28',
    label: 'Média',
    pricePerM3: 1071.20,
    pricePerM2Per1cm: 10.71,
    color: 'from-blue-400 to-cyan-500',
    colorBg: 'bg-blue-400/10',
    colorText: 'text-blue-400',
    colorBorder: 'border-blue-400/30',
    icon: 'fa-feather',
    description: 'Conforto intermediário para estofados e colchões leves.',
    useCases: ['Colchões de solteiro', 'Estofados leves', 'Bancos', 'Pallets'],
  },
  {
    id: 'D33',
    name: 'D33',
    label: 'Firme',
    pricePerM3: 1359.60,
    pricePerM2Per1cm: 13.60,
    color: 'from-yellow-400 to-amber-500',
    colorBg: 'bg-yellow-400/10',
    colorText: 'text-yellow-400',
    colorBorder: 'border-yellow-400/30',
    icon: 'fa-shield-halved',
    description: 'Firmeza ideal para colchões e assentos de uso frequente.',
    useCases: ['Colchões de casal', 'Assentos de sofá', 'Cadeiras de escritório', 'Bancos automotivos'],
  },
  {
    id: 'D40',
    name: 'D40',
    label: 'Alta Performance',
    pricePerM3: 1730.40,
    pricePerM2Per1cm: 17.30,
    color: 'from-red-400 to-rose-500',
    colorBg: 'bg-red-400/10',
    colorText: 'text-red-400',
    colorBorder: 'border-red-400/30',
    icon: 'fa-diamond',
    description: 'Máxima durabilidade e suporte para uso intenso.',
    useCases: ['Colchões ortopédicos', 'Uso hospitalar', 'Assentos industriais', 'Alto tráfego'],
  },
] as const;

export const MATTRESS_SIZES = [
  { name: 'Solteiro', width: 88, length: 188 },
  { name: 'Casal', width: 138, length: 188 },
] as const;

export const MATTRESS_HEIGHTS = [5, 7, 8, 10, 12, 15, 18, 20] as const;

export const SHEET_SIZE = { width: 210, length: 310 } as const;

export const MAX_DIMENSIONS = { width: 210, length: 160, height: 100 } as const;

export const WHATSAPP_NUMBER = '5541988442226'; // Placeholder

export const MIN_ORDER_VALUE = 500;

export function formatCurrency(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function calculatePrice(
  widthCm: number,
  lengthCm: number,
  heightCm: number,
  pricePerM3: number
): number {
  const widthM = widthCm / 100;
  const lengthM = lengthCm / 100;
  const heightM = heightCm / 100;
  return widthM * lengthM * heightM * pricePerM3;
}

export function buildWhatsAppLink(
  density: string,
  widthCm: number,
  lengthCm: number,
  heightCm: number,
  price: number
): string {
  const message = encodeURIComponent(
    `Olá! Gostaria de solicitar um orçamento:\n\n` +
    `📐 *Medidas:* ${widthCm}cm x ${lengthCm}cm x ${heightCm}cm\n` +
    `🔹 *Densidade:* ${density}\n` +
    `💰 *Valor estimado:* ${formatCurrency(price)}\n\n` +
    `Aguardo retorno!`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
