import {
  ArrowRight, CalendarCheck, Calculator, ChartNoAxesColumn, Cloud, CreditCard, FileCheck,
  GraduationCap, HandHeart, HardDrive, HardHat, HeartPulse, LayoutTemplate,
  Lock, Menu, Monitor, Package, Plug, Puzzle, ReceiptText, Ruler, Search,
  ShieldCheck, Users, X
} from "lucide-react";

/**
 * Ícone de linha do conjunto Lucide, que é o set nomeado pelo design system
 * ("linha, traço 1.5–2px, cantos arredondados"). Traço padronizado em 2px para
 * a página inteira; a cor vem de `currentColor`, então quem pinta é o pai.
 */
const ICONS = {
  "arrow-right": ArrowRight,
  "calendar-check": CalendarCheck,
  calculator: Calculator,
  "chart-no-axes-column": ChartNoAxesColumn,
  cloud: Cloud,
  "credit-card": CreditCard,
  "file-check": FileCheck,
  "graduation-cap": GraduationCap,
  "hand-heart": HandHeart,
  "hard-drive": HardDrive,
  "hard-hat": HardHat,
  "heart-pulse": HeartPulse,
  "layout-template": LayoutTemplate,
  lock: Lock,
  menu: Menu,
  monitor: Monitor,
  package: Package,
  plug: Plug,
  puzzle: Puzzle,
  "receipt-text": ReceiptText,
  ruler: Ruler,
  search: Search,
  "shield-check": ShieldCheck,
  users: Users,
  x: X
} as const;

export type IconName = keyof typeof ICONS;

export interface IconProps {
  name: IconName;
  size?: number;
  /** Sobrescreve o `currentColor` herdado do pai. */
  strokeColor?: string;
  className?: string;
}

export function Icon({ name, size = 22, strokeColor, className }: IconProps) {
  const Glyph = ICONS[name];
  return (
    <Glyph
      size={size}
      strokeWidth={2}
      color={strokeColor}
      className={className}
      aria-hidden="true"
      focusable="false"
      style={{ flex: "none" }}
    />
  );
}
