import {
  BadgeCheck,
  Bus,
  Cake,
  CreditCard,
  Dumbbell,
  Flag,
  Handshake,
  Lightbulb,
  Puzzle,
  Rocket,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/content/site";

const ICONS: Record<IconName, React.ComponentType<LucideProps>> = {
  Rocket,
  BadgeCheck,
  Lightbulb,
  Flag,
  Puzzle,
  Handshake,
  CreditCard,
  Dumbbell,
  Bus,
  Cake,
};

interface IconProps extends LucideProps {
  name: IconName;
}

export default function Icon({ name, strokeWidth = 1.75, ...rest }: IconProps) {
  const Component = ICONS[name];
  return <Component strokeWidth={strokeWidth} aria-hidden="true" {...rest} />;
}
