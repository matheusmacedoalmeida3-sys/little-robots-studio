import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Award, Camera, Compass, FolderKanban, HelpCircle, Home, Menu, Search, Shield, Trophy, User, UserPlus } from "lucide-react";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { useDemo } from "@/store/demo-store";
import mascot from "@/assets/mascot.png";
import { cn } from "@/lib/utils";

export const navItems = [
  { to: "/", label: "Início", icon: Home },
  { to: "/projetos", label: "Explorar projetos", icon: Compass },
  { to: "/meus-projetos", label: "Meus projetos", icon: FolderKanban },
  { to: "/enviar-fotos", label: "Enviar fotos", icon: Camera },
  { to: "/ranking", label: "Ranking", icon: Trophy },
  { to: "/conquistas", label: "Minhas conquistas", icon: Award },
  { to: "/indicar", label: "Indicar amigos", icon: UserPlus },
  { to: "/perfil", label: "Meu perfil", icon: User },
  { to: "/ajuda", label: "Ajuda", icon: HelpCircle },
] as const;

function useActive() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (to: string) => (to === "/" ? path === "/" : path.startsWith(to));
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const isActive = useActive();
  const { progress } = useDemo();
  const inProgress = Object.values(progress).filter((p) => p.status === "em_andamento" || p.status === "aguardando").length;
  return (
    <nav className="flex flex-col gap-1 pl-4">
      {[...navItems, { to: "/admin", label: "Painel admin (demo)", icon: Shield }].map((item) => {
        const active = isActive(item.to);
        return (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 rounded-l-full py-3 pl-5 pr-4 text-sm font-semibold transition-colors",
              active ? "bg-background text-foreground" : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              item.to === "/admin" && "mt-4",
            )}
          >
            <item.icon className="h-[18px] w-[18px]" />
            <span className="flex-1">{item.label}</span>
            {item.to === "/meus-projetos" && inProgress > 0 && (
              <span className={cn("rounded-md px-2 text-xs", active ? "bg-accent text-accent-foreground" : "bg-sidebar-accent")}>{inProgress}</span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold tracking-wide">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">⚙</span>
      RoboLab<span className="text-cyan">100</span>
    </Link>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const isActive = useActive();
  return (
    <div className="flex min-h-screen w-full">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col bg-sidebar text-sidebar-foreground lg:flex">
        <div className="px-7 py-7 text-sidebar-foreground"><Brand /></div>
        <div className="flex-1 overflow-y-auto"><NavList /></div>
        <div className="relative px-6 pb-6">
          <img src={mascot} alt="Mascote robô" width={1024} height={1024} loading="lazy" className="mx-auto h-36 w-36 object-contain drop-shadow-xl" />
          <p className="text-center text-xs text-sidebar-foreground/70">Modo demonstração · sem login real</p>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center gap-3 bg-sidebar px-4 py-3 text-sidebar-foreground lg:hidden">
          <button aria-label="Abrir menu" onClick={() => setOpen(true)} className="rounded-xl p-2 hover:bg-sidebar-accent"><Menu /></button>
          <Brand />
          <Link to="/projetos" aria-label="Buscar projetos" className="ml-auto rounded-xl p-2 hover:bg-sidebar-accent"><Search /></Link>
        </header>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="left" className="w-72 border-0 bg-sidebar p-0 text-sidebar-foreground">
            <SheetTitle className="px-7 py-6 text-sidebar-foreground"><Brand /></SheetTitle>
            <NavList onNavigate={() => setOpen(false)} />
          </SheetContent>
        </Sheet>

        <main className="flex-1 px-4 pb-28 pt-5 sm:px-6 lg:px-8 lg:pb-10 lg:pt-6">{children}</main>

        <nav className="fixed inset-x-3 bottom-3 z-30 grid grid-cols-5 rounded-3xl bg-card p-1.5 shadow-lift lg:hidden">
          {navItems.slice(0, 5).map((i) => (
            <Link key={i.to} to={i.to} className={cn("flex flex-col items-center gap-0.5 rounded-2xl py-2 text-[10px] font-bold", isActive(i.to) ? "bg-primary text-primary-foreground" : "text-muted-foreground")}>
              <i.icon className="h-5 w-5" />
              {i.label.split(" ")[0]}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
