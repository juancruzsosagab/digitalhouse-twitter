import FAQSection from '../components/faq/FAQSection';
import faqsApi from '../services/faqs/faqs.service';

export default async function FAQPage() {
  const faqPages = await faqsApi.getFAQPages();
  return (
    <>
      <main>
        <FAQSection sections={faqPages.data} />
        <section className="flex flex-col">
          <h2>Sección 1</h2>
        </section>
      </main>
    </>
  );
}
