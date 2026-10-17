import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, EmptyState } from "@/components/common";

export const Route = createFileRoute("/projetos/$id")({
  head: () => ({ meta: [{ title: "Detalhes do projeto · RoboLab100" }, { name: "description", content: "Detalhes do projeto na plataforma RoboLab100." }, { property: "og:title", content: "Detalhes do projeto · RoboLab100" }, { property: "og:description", content: "Detalhes do projeto na plataforma RoboLab100." }] }),
  component: () => (
    <div>
      <PageHeader title="Detalhes do projeto" />
      <EmptyState icon="🛠️" title="Página em construção" text="Esta tela ainda será finalizada." />
    </div>
  ),
});
