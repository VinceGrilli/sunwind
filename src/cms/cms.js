import CMS from 'netlify-cms-app';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import WindPagePreview from './preview-templates/WindPagePreview';
import EnergyStoragePagePreview from './preview-templates/EnergyStoragePagePreview';
import ResidentialCommercialPagePreview from './preview-templates/ResidentialCommercialPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('wind', WindPagePreview);
CMS.registerPreviewTemplate('energystorage', EnergyStoragePagePreview);
CMS.registerPreviewTemplate(
  'residentialcommercial',
  ResidentialCommercialPagePreview
);
