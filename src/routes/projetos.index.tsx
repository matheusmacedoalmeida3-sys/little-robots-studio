import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, EmptyState } from "@/components/common";

export const Route = createFileRoute("/projetos/")({
  head: () => ({ meta: [{ title: "Explorar projetos · RoboLab100" }, { name: "description", content: "Explorar projetos na plataforma RoboLab100." }, { property: "og:title", content: "Explorar projetos · RoboLab100" }, { property: "og:description", content: "Explorar projetos na plataforma RoboLab100." }] }),
  component: () => (
    <div>
      <PageHeader title="Explorar projetos" />
      <EmptyState icon="🛠️" title="Página em construção" text="Esta tela ainda será finalizada." />
    </div>
  ),
});
