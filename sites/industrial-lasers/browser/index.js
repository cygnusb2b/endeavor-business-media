import Browser from '@base-cms/marko-web/browser';
import DefaultTheme from '@base-cms/marko-web-theme-default/browser';
import GTM from '@base-cms/marko-web-gtm/browser';
import GAM from '@base-cms/marko-web-gam/browser';
import GCSE from '@base-cms/marko-web-gcse/browser';
import RevealAd from '@base-cms/marko-web-reveal-ad/browser';
import Common from '@base-cms-websites/package-common/browser';
import Inquiry from '@base-cms-websites/package-inquiry/browser';

DefaultTheme(Browser);
GTM(Browser);
GAM(Browser);
GCSE(Browser);
RevealAd(Browser);
Common(Browser);
Inquiry(Browser);

export default Browser;
