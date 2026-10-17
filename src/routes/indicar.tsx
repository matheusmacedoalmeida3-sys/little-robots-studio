import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, EmptyState } from "@/components/common";

export const Route = createFileRoute("/indicar")({
  head: () => ({ meta: [{ title: "Convide novos inventores · RoboLab100" }, { name: "description", content: "Convide novos inventores na plataforma RoboLab100." }, { property: "og:title", content: "Convide novos inventores · RoboLab100" }, { property: "og:description", content: "Convide novos inventores na plataforma RoboLab100." }] }),
  component: () => (
    <div>
      <PageHeader title="Convide novos inventores" />
      <EmptyState icon="🛠️" title="Página em construção" text="Esta tela ainda será finalizada." />
    </div>
  ),
});
