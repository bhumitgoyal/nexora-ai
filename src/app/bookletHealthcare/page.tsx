import { PrintBar } from "@/components/booklet/PrintBar";
import { HCCover } from "@/components/bookletHealthcare/HCCover";
import { HCManifesto } from "@/components/bookletHealthcare/HCManifesto";
import { HCServices } from "@/components/bookletHealthcare/HCServices";
import { HCSpotlight1 } from "@/components/bookletHealthcare/HCSpotlight1";
import { HCSpotlight2 } from "@/components/bookletHealthcare/HCSpotlight2";
import { HCCaseStudy } from "@/components/bookletHealthcare/HCCaseStudy";
import { HCWhyUs } from "@/components/bookletHealthcare/HCWhyUs";
import { HCContact } from "@/components/bookletHealthcare/HCContact";

export default function BookletHealthcarePage() {
  return (
    <>
      <PrintBar />
      <HCCover />
      <HCManifesto />
      <HCServices />
      <HCSpotlight1 />
      <HCSpotlight2 />
      <HCCaseStudy />
      <HCWhyUs />
      <HCContact />
    </>
  );
}
