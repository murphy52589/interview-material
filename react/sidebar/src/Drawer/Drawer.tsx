import './Drawer.css';

export interface DrawerProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

export function Drawer({ isOpen, setOpen, title, children }: DrawerProps) {
  return (
    <>
      <span>{title}</span>
      {children && children}
    </>
  );
}
