import { techStack } from "@/content/techStack";
import { Marquee } from "@/components/shared/Marquee";
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
    <section className="relative border-t border-[var(--color-border)] py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Our toolkit"
          title="Services we automate for your business."
          subtitle="From sales follow-ups to invoice processing we take repetitive tasks off your plate so you can focus on what matters."
        />
      </div>

      <div className="mt-16 flex flex-col gap-4">
        <Marquee>
          {rowA.map((t) => (
            <ServiceChip key={t.name} name={t.name} />
          ))}
        </Marquee>
        <Marquee reverse>
          {rowB.map((t) => (
            <ServiceChip key={t.name} name={t.name} />
          ))}
        </Marquee>
      </div>

      <div className="mt-16 border-t border-[var(--color-border)] pt-12">
        <p className="container-x mb-6 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
          Integration partners &amp; platforms
        </p>
        <Marquee pauseOnHover={false}>
          {integrationPartners.map((p) => (
            <IntegrationChip key={p.name} name={p.name} category={p.category} />
          ))}
        </Marquee>
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
      <span className="rounded-sm bg-[var(--color-bg-elev)] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[var(--color-fg-subtle)]">
        {category}
      </span>
    </span>
  );
}
