import { Link } from "@tanstack/react-router";
import { Clock, Star } from "lucide-react";
import type { Project } from "@/types";
import { categoryById } from "@/data/categories";
import { useDemo } from "@/store/demo-store";
import { DifficultyBadge, ProjectStatusBadge } from "@/components/common";

export function ProjectCard({ project }: { project: Project }) {
  const { getProgress } = useDemo();
  const status = getProgress(project.id).status;
  const cat = categoryById(project.categoryId);
  return (
    <Link to="/projetos/$id" params={{ id: project.id }} className="surface lift group block overflow-hidden focus-visible:outline-2 focus-visible:outline-ring">
      <div className="relative aspect-[3/2] overflow-hidden">
        <img src={project.cover} alt="" loading="lazy" width={992} height={672} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-xl bg-navy/85 px-2.5 py-1 font-display text-sm font-semibold text-navy-foreground">#{project.number}</span>
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-xl bg-gold px-2 py-1 text-xs font-bold text-gold-foreground">
          <Star className="h-3 w-3 fill-current" /> {project.points}
        </span>
      </div>
      <div className="space-y-2 p-4">
        <p className="text-[11px] font-bold uppercase tracking-wider text-primary">{cat.short}</p>
        <h3 className="line-clamp-1 text-base">{project.name}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <DifficultyBadge d={project.difficulty} />
          {status !== "nao_iniciado" && <ProjectStatusBadge s={status} />}
          {project.minutes && (
            <span className="ml-auto inline-flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3 w-3" />{project.minutes} min</span>
          )}
        </div>
      </div>
    </Link>
  );
}
