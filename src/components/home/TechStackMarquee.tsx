import { techStack } from "@/content/techStack";
import { VelocityMarquee } from "@/components/fx/VelocityMarquee";
import { SectionHeader } from "@/components/shared/SectionHeader";

const integrationPartners = [
  { name: "OpenAI", category: "AI" },
  { name: "Anthropic", category: "AI" },
  { name: "Google Gemini", category: "AI" },
  { name: "Meta LLaMA", category: "AI" },
  { name: "Vapi AI", category: "Voice" },
  { name: "ElevenLabs", category: "Voice" },
  { name: "Twilio", category: "Messaging" },
  { name: "WhatsApp Business API", category: "Messaging" },
  { name: "Make", category: "Automation" },
  { name: "n8n", category: "Automation" },
  { name: "Zapier", category: "Automation" },
  { name: "HubSpot", category: "CRM" },
  { name: "Airtable", category: "Data" },
  { name: "Supabase", category: "Data" },
  { name: "Pinecone", category: "AI" },
  { name: "Notion", category: "Ops" },
];

export function TechStackMarquee() {
  const rowA = techStack.slice(0, 12);
  const rowB = techStack.slice(12);

  return (
    <section className="section-y relative border-t border-[var(--color-border)] ">
      <div className="container-x">
        <SectionHeader
          eyebrow="What runs on the layer"
          title="Manual work we've already made disappear."
          subtitle="Once a workflow moves onto the layer, nobody touches it again."
        />
      </div>

      <div className="mt-16 flex flex-col gap-4">
        <VelocityMarquee baseVelocity={-1.4}>
          {rowA.map((t) => (
            <ServiceChip key={t.name} name={t.name} />
          ))}
        </VelocityMarquee>
        <VelocityMarquee baseVelocity={1.4}>
          {rowB.map((t) => (
            <ServiceChip key={t.name} name={t.name} />
          ))}
        </VelocityMarquee>
      </div>

      <div className="mt-16 border-t border-[var(--color-border)] pt-12">
        <p className="container-x mb-6 text-center text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
          Integration platforms
        </p>
        <VelocityMarquee baseVelocity={-1}>
          {integrationPartners.map((p) => (
            <IntegrationChip key={p.name} name={p.name} category={p.category} />
          ))}
        </VelocityMarquee>
      </div>
    </section>
  );
}

function ServiceChip({ name }: { name: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-5 py-2.5 font-display text-sm font-semibold text-[var(--color-fg)]">
      <span className="size-1.5 bg-[var(--color-brand)]" />
      {name}
    </span>
  );
}

function IntegrationChip({ name, category }: { name: string; category: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-3 border border-[var(--color-border-strong)] bg-[var(--color-bg)] px-4 py-2">
      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-fg)]">
        {name}
      </span>
      <span className=" bg-[var(--color-bg-elev)] px-1.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-[var(--color-fg-subtle)]">
        {category}
      </span>
    </span>
  );
}
