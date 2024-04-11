import { FAQPageType } from '@/app/types/faq.types';

import { StrapiResultType } from '@/app/types/strapi.types';
import { strapiGet } from '../common/strapi.service';

class FAQSApi {
  getFAQPages = async (): Promise<StrapiResultType<FAQPageType>> => {
    return strapiGet(`/faq-pages`);
  };
}

const faqsApi = new FAQSApi();
export default faqsApi;