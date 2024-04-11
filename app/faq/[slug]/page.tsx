import FAQSection from '@/app/components/faq/FAQSection';
import faqsApi from '@/app/services/faqs/faqs.service';

export default async function FAQPage( { params }: { params: { slug: string } }) {
  const faqPages = await faqsApi.getFAQPages();
  const faqPage = faqPages.data.find((faqPage) => faqPage.attributes.slug === `/${params.slug}`);
  return (
    <>
      <main>
        <FAQSection sections={faqPages.data} />
        <section className="flex flex-col">
          <h2>{faqPage?.attributes.title}</h2>
          <div>{faqPage?.attributes.title}</div>
        </section>
      </main>
    </>
  );
}
