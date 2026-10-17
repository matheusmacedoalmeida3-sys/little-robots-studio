import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, EmptyState } from "@/components/common";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Painel administrativo (demo) · RoboLab100" }, { name: "description", content: "Painel administrativo (demo) na plataforma RoboLab100." }, { property: "og:title", content: "Painel administrativo (demo) · RoboLab100" }, { property: "og:description", content: "Painel administrativo (demo) na plataforma RoboLab100." }] }),
  component: () => (
    <div>
      <PageHeader title="Painel administrativo (demo)" />
      <EmptyState icon="🛠️" title="Página em construção" text="Esta tela ainda será finalizada." />
    </div>
  ),
});
