import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, EmptyState } from "@/components/common";

export const Route = createFileRoute("/conquistas")({
  head: () => ({ meta: [{ title: "Minhas conquistas · RoboLab100" }, { name: "description", content: "Minhas conquistas na plataforma RoboLab100." }, { property: "og:title", content: "Minhas conquistas · RoboLab100" }, { property: "og:description", content: "Minhas conquistas na plataforma RoboLab100." }] }),
  component: () => (
    <div>
      <PageHeader title="Minhas conquistas" />
      <EmptyState icon="🛠️" title="Página em construção" text="Esta tela ainda será finalizada." />
    </div>
  ),
});
