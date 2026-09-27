import { Bus, Cake, CreditCard, Dumbbell, type LucideProps } from "lucide-react";
import type { IconName } from "@/content/site";

const ICONS: Record<IconName, React.ComponentType<LucideProps>> = {
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
