import {
  GraduationCap, Target, Sparkles, Rocket, Layout, Code2, Wrench, Users,
  Globe, CloudSun, ListChecks, Database, Dumbbell, UtensilsCrossed, type LucideIcon,
} from 'lucide-react';

// Data file refers to icons by name; this map keeps the bundle small (no wildcard import).
export const iconMap: Record<string, LucideIcon> = {
  GraduationCap, Target, Sparkles, Rocket, Layout, Code2, Wrench, Users,
  Globe, CloudSun, ListChecks, Database, Dumbbell, UtensilsCrossed,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
