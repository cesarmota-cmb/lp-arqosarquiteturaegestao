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
    const ref = document.referrer.toLowerCase();
    
    if (!ref) {
      utms.utm_source = 'direto';
      utms.utm_medium = 'nenhum';
    } 
    // AI Tools
    else if (ref.includes('openai.com') || ref.includes('chatgpt.com')) {
      utms.utm_source = 'ia';
      utms.utm_medium = 'chatgpt';
    } else if (ref.includes('claude.ai') || ref.includes('anthropic.com')) {
      utms.utm_source = 'ia';
      utms.utm_medium = 'claude';
    } else if (ref.includes('perplexity.ai')) {
      utms.utm_source = 'ia';
      utms.utm_medium = 'perplexity';
    }
    // Search Engines
    else if (ref.includes('google.')) {
      utms.utm_source = 'google';
      utms.utm_medium = 'organico';
    } else if (ref.includes('bing.com')) {
      utms.utm_source = 'bing';
      utms.utm_medium = 'organico';
    } else if (ref.includes('yahoo.com')) {
      utms.utm_source = 'yahoo';
      utms.utm_medium = 'organico';
    }
    // Social Media
    else if (ref.includes('instagram.com') || ref.includes('l.instagram.com')) {
      utms.utm_source = 'instagram';
      utms.utm_medium = 'social';
    } else if (ref.includes('facebook.com') || ref.includes('l.facebook.com')) {
      utms.utm_source = 'facebook';
      utms.utm_medium = 'social';
    } else if (ref.includes('t.co') || ref.includes('twitter.com') || ref.includes('x.com')) {
      utms.utm_source = 'x';
      utms.utm_medium = 'social';
    } else if (ref.includes('linkedin.com')) {
      utms.utm_source = 'linkedin';
      utms.utm_medium = 'social';
    }
    // Generic Referral
    else {
      utms.utm_source = 'referencia';
      utms.utm_medium = 'referencia';
      utms.referrer_url = ref;
    }
  }

  return utms;
};

export default useUTM;
