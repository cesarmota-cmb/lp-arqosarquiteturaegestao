/**
 * useUTM — captures and persists UTM and traffic source data.
 * 
 * Logic:
 * 1. Checks URL for UTMs/GCLID/FBCLID.
 * 2. If present, saves to sessionStorage.
 * 3. If NOT in URL, checks sessionStorage.
 * 4. If still NOT found, determines source via document.referrer.
 */

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',            // Google Ads auto-tag
  'gad_source',       // Google Ads source info
  'gad_campaignid',   // Google Ads campaign ID
  'gbraid',           // iOS tracking
  'wbraid',           // iOS tracking
  'fbclid',           // Meta Ads auto-tag
];

const STORAGE_KEY = 'arqos_utm_params';

const useUTM = () => {
  const urlParams = new URL(window.location.href).searchParams;
  let utms = {};
  let foundInUrl = false;

  // 1. Try URL
  UTM_KEYS.forEach((key) => {
    const val = urlParams.get(key);
    if (val) {
      utms[key] = val;
      foundInUrl = true;
    }
  });

  // 2. Persist or recover
  if (foundInUrl) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utms));
  } else {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      try { utms = JSON.parse(stored); } catch (_) {}
    }
  }

  // 3. Fallback to Referrer (Organic Detection) if no UTMs found yet
  if (Object.keys(utms).length === 0) {
    const ref = document.referrer;
    if (!ref) {
      utms.utm_source = 'direto';
      utms.utm_medium = 'nenhum';
    } else if (ref.includes('google.com')) {
      utms.utm_source = 'google';
      utms.utm_medium = 'organico';
    } else if (ref.includes('facebook.com') || ref.includes('instagram.com')) {
      utms.utm_source = 'social';
      utms.utm_medium = 'organico';
    } else {
      utms.utm_source = 'referencia';
      utms.utm_medium = 'referencia';
      utms.referrer_url = ref;
    }
  }

  return utms;
};

export default useUTM;
