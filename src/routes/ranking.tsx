import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, EmptyState } from "@/components/common";

export const Route = createFileRoute("/ranking")({
  head: () => ({ meta: [{ title: "Ranking · RoboLab100" }, { name: "description", content: "Ranking na plataforma RoboLab100." }, { property: "og:title", content: "Ranking · RoboLab100" }, { property: "og:description", content: "Ranking na plataforma RoboLab100." }] }),
  component: () => (
    <div>
      <PageHeader title="Ranking" />
      <EmptyState icon="🛠️" title="Página em construção" text="Esta tela ainda será finalizada." />
    </div>
  ),
});
