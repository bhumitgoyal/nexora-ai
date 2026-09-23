import { Megaphone, Building2, ShoppingBag, Utensils, Boxes, type LucideIcon } from "lucide-react";

// Keyed by Sector.id, not by the URL slug. Lives here rather than beside the
// home-page console so the /industries pages and the console cannot drift.
export const sectorIcons: Record<string, LucideIcon> = {
  marketing: Megaphone,
  ecommerce: ShoppingBag,
  realestate: Building2,
  restaurants: Utensils,
  b2b: Boxes,
};
