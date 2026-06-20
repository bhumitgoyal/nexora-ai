import { PrintBar } from "@/components/booklet/PrintBar";
import { D2CCover } from "@/components/bookletD2C/D2CCover";
import { D2CManifesto } from "@/components/bookletD2C/D2CManifesto";
import { D2CServices } from "@/components/bookletD2C/D2CServices";
import { D2CSpotlight1 } from "@/components/bookletD2C/D2CSpotlight1";
import { D2CSpotlight2 } from "@/components/bookletD2C/D2CSpotlight2";
import { D2CCaseStudy } from "@/components/bookletD2C/D2CCaseStudy";
import { D2CWhyUs } from "@/components/bookletD2C/D2CWhyUs";
import { D2CContact } from "@/components/bookletD2C/D2CContact";

export default function BookletD2CPage() {
  return (
    <>
      <PrintBar />
      <D2CCover />
      <D2CManifesto />
      <D2CServices />
      <D2CSpotlight1 />
      <D2CSpotlight2 />
      <D2CCaseStudy />
      <D2CWhyUs />
      <D2CContact />
    </>
  );
}
