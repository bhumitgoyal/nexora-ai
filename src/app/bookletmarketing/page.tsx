import { PrintBar } from "@/components/booklet/PrintBar";
import { MktCover } from "@/components/bookletMarketing/MktCover";
import { MktManifesto } from "@/components/bookletMarketing/MktManifesto";
import { MktServices } from "@/components/bookletMarketing/MktServices";
import { MktSpotlight1 } from "@/components/bookletMarketing/MktSpotlight1";
import { MktSpotlight2 } from "@/components/bookletMarketing/MktSpotlight2";
import { MktCaseStudy } from "@/components/bookletMarketing/MktCaseStudy";
import { MktWhyUs } from "@/components/bookletMarketing/MktWhyUs";
import { MktContact } from "@/components/bookletMarketing/MktContact";

export default function BookletMarketingPage() {
  return (
    <>
      <PrintBar />
      <MktCover />
      <MktManifesto />
      <MktServices />
      <MktSpotlight1 />
      <MktSpotlight2 />
      <MktCaseStudy />
      <MktWhyUs />
      <MktContact />
    </>
  );
}
