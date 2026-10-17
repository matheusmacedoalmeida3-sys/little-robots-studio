import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, EmptyState } from "@/components/common";

export const Route = createFileRoute("/perfil")({
  head: () => ({ meta: [{ title: "Meu perfil · RoboLab100" }, { name: "description", content: "Meu perfil na plataforma RoboLab100." }, { property: "og:title", content: "Meu perfil · RoboLab100" }, { property: "og:description", content: "Meu perfil na plataforma RoboLab100." }] }),
  component: () => (
    <div>
      <PageHeader title="Meu perfil" />
      <EmptyState icon="🛠️" title="Página em construção" text="Esta tela ainda será finalizada." />
    </div>
  ),
});
