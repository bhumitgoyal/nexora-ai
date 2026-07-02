import { X, Check } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";

const rows = [
  {
    task: "Lead follow-up response time",
    without: "2–4 hours of manual chasing",
    with: "<60 seconds AI agent fires instantly",
  },
  {
    task: "Monthly reporting",
    without: "2–3 days pulling data from 6+ tools",
    with: "Automated in 15 minutes, every time",
  },
  {
    task: "After-hours enquiries",
    without: "Missed calls, next-day callback",
    with: "Answered 24/7, first ring, every time",
  },
  {
    task: "Prospect research",
    without: "Hours of manual googling per batch",
    with: "Enriched lists in minutes, at scale",
  },
  {
    task: "Campaign brief → launch",
    without: "2 days per channel, 1 team member pinned",
    with: "Multi-channel in <15 min from one input",
  },
  {
    task: "Ops co-ordination calls",
    without: "Daily stand-ups, Slack threads, mistakes",
    with: "0 calls status pushed to everyone automatically",
  },
];

export function ComparisonTable() {
  return (
    <section className="border-t border-[var(--color-border)] py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="The difference"
          title="What changes when your ops run on AI infrastructure."
          subtitle="Side by side — every workflow where the manual grind gets replaced by a system that knows the work and just runs it."
        />

        <Reveal delay={0.1}>
          <div className="mt-14 overflow-x-auto border border-[var(--color-border)]">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-[var(--color-border)] hover:bg-transparent">
                  <TableHead className="w-[35%] bg-[var(--color-bg-elev)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                    Workflow
                  </TableHead>
                  <TableHead className="w-[32.5%] bg-[var(--color-bg-elev)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                    <span className="flex items-center gap-2">
                      <X className="size-3.5 text-[var(--color-danger)]" />
                      Without Nuvero AI
                    </span>
                  </TableHead>
                  <TableHead className="w-[32.5%] bg-[var(--color-brand)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    <span className="flex items-center gap-2">
                      <Check className="size-3.5" />
                      With Nuvero AI
                    </span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow
                    key={row.task}
                    className="border-b border-[var(--color-border)] transition-colors hover:bg-[var(--color-bg-elev)]"
                  >
                    <TableCell className="px-6 py-5 font-display text-sm font-semibold tracking-tight text-[var(--color-fg)]">
                      {row.task}
                    </TableCell>
                    <TableCell className="px-6 py-5 text-sm text-[var(--color-fg-muted)]">
                      {row.without}
                    </TableCell>
                    <TableCell className="bg-[var(--color-brand)]/5 px-6 py-5 text-sm font-medium text-[var(--color-fg)]">
                      {row.with}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
