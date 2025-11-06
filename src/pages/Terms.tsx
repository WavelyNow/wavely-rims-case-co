import termsHtml from "@/content/legal/terms.html?raw";
import LegalLayout from "@/components/LegalLayout";

const Terms = () => {
  return (
    <LegalLayout title="Termeni și Condiții" htmlRaw={termsHtml} />
  );
};

export default Terms;
