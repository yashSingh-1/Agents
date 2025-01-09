import {
  Sheet as ShadCnSheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

type Props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

const Sheet = ({ trigger, children, className }: Props) => {
  return (
    <ShadCnSheet>
      <SheetTrigger className={className}>{trigger} somr</SheetTrigger>
      <SheetContent>{children}</SheetContent>
    </ShadCnSheet>
  );
};

export default Sheet;
