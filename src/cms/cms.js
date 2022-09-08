import CMS from 'netlify-cms-app';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import WindPagePreview from './preview-templates/WindPagePreview';
import EnergyStoragePagePreview from './preview-templates/EnergyStoragePagePreview';
import IncentiveProgramsPagePreview from './preview-templates/IncentiveProgramsPagePreview';
import PaymentOptionsPagePreview from './preview-templates/PaymentOptionsPagePreview';
import GroundPagePreview from './preview-templates/GroundPagePreview';
import GalleryPagePreview from './preview-templates/GalleryPagePreview';
import ResidentialCommercialPagePreview from './preview-templates/ResidentialCommercialPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('wind', WindPagePreview);
CMS.registerPreviewTemplate('paymentOptions', PaymentOptionsPagePreview);
CMS.registerPreviewTemplate('energyStorage', EnergyStoragePagePreview);
CMS.registerPreviewTemplate('incentivePrograms', IncentiveProgramsPagePreview);
CMS.registerPreviewTemplate('ground', GroundPagePreview);
CMS.registerPreviewTemplate('gallery', GalleryPagePreview);
CMS.registerPreviewTemplate(
  'residentialCommercial',
  ResidentialCommercialPagePreview
);
