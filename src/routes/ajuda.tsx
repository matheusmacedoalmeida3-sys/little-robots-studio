import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, EmptyState } from "@/components/common";

export const Route = createFileRoute("/ajuda")({
  head: () => ({ meta: [{ title: "Ajuda · RoboLab100" }, { name: "description", content: "Ajuda na plataforma RoboLab100." }, { property: "og:title", content: "Ajuda · RoboLab100" }, { property: "og:description", content: "Ajuda na plataforma RoboLab100." }] }),
  component: () => (
    <div>
      <PageHeader title="Ajuda" />
      <EmptyState icon="🛠️" title="Página em construção" text="Esta tela ainda será finalizada." />
    </div>
  ),
});
