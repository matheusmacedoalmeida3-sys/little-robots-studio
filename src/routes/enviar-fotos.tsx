import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, EmptyState } from "@/components/common";

export const Route = createFileRoute("/enviar-fotos")({
  head: () => ({ meta: [{ title: "Enviar fotos · RoboLab100" }, { name: "description", content: "Enviar fotos na plataforma RoboLab100." }, { property: "og:title", content: "Enviar fotos · RoboLab100" }, { property: "og:description", content: "Enviar fotos na plataforma RoboLab100." }] }),
  component: () => (
    <div>
      <PageHeader title="Enviar fotos" />
      <EmptyState icon="🛠️" title="Página em construção" text="Esta tela ainda será finalizada." />
    </div>
  ),
});
