import { caseStudies } from "@/content/caseStudies";
import { PrintBar } from "@/components/booklet/PrintBar";
import { PosterCover } from "@/components/booklet/PosterCover";
import { PosterManifesto } from "@/components/booklet/PosterManifesto";
import { PosterIntegrations } from "@/components/booklet/PosterIntegrations";
import { PosterServicesOverview } from "@/components/booklet/PosterServicesOverview";
import { PosterServiceSpotlight1 } from "@/components/booklet/PosterServiceSpotlight1";
import { PosterServiceSpotlight2 } from "@/components/booklet/PosterServiceSpotlight2";
import { PosterServiceSpotlight3 } from "@/components/booklet/PosterServiceSpotlight3";
import { PosterImpact } from "@/components/booklet/PosterImpact";
import { PosterCaseStudy } from "@/components/booklet/PosterCaseStudy";
import { PosterProcess } from "@/components/booklet/PosterProcess";
import { PosterWhyUs } from "@/components/booklet/PosterWhyUs";
import { PosterContact } from "@/components/booklet/PosterContact";

const featuredCases = caseStudies.filter((c) => c.featured).slice(0, 3);

export default function BookletPage() {
  return (
    <>
      <PrintBar />

      <PosterCover />
      <PosterManifesto />
      <PosterIntegrations />
      <PosterServicesOverview />
      <PosterServiceSpotlight1 />
      <PosterServiceSpotlight2 />
      <PosterServiceSpotlight3 />
      <PosterImpact />

      {featuredCases.map((cs, i) => (
        <PosterCaseStudy
          key={cs.slug}
          caseStudy={cs}
          page={`${String(9 + i).padStart(2, "0")} / 14`}
          index={i}
          total={featuredCases.length}
        />
      ))}

      <PosterProcess />
      <PosterWhyUs />
      <PosterContact />
    </>
  );
}
