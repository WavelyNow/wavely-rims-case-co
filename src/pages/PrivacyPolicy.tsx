import privacyHtml from "@/content/legal/privacy.html?raw";
import LegalLayout from "@/components/LegalLayout";

const PrivacyPolicy = () => {
  return (
    <LegalLayout title="Politică de Confidențialitate" htmlRaw={privacyHtml} />
  );
};

export default PrivacyPolicy;
