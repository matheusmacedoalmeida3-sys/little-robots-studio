import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, EmptyState } from "@/components/common";

export const Route = createFileRoute("/meus-projetos")({
  head: () => ({ meta: [{ title: "Meus projetos · RoboLab100" }, { name: "description", content: "Meus projetos na plataforma RoboLab100." }, { property: "og:title", content: "Meus projetos · RoboLab100" }, { property: "og:description", content: "Meus projetos na plataforma RoboLab100." }] }),
  component: () => (
    <div>
      <PageHeader title="Meus projetos" />
      <EmptyState icon="🛠️" title="Página em construção" text="Esta tela ainda será finalizada." />
    </div>
  ),
});
