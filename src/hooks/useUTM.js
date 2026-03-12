/**
 * useUTM — reads UTM query parameters from the current URL once,
 * stores them in sessionStorage so they survive internal navigation,
 * and returns them as a plain object.
 *
 * Tracked params: utm_source, utm_medium, utm_campaign, utm_term,
 * utm_content plus Google's gclid and Meta's fbclid.
 */
const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',   // Google Ads auto-tag
  'fbclid',  // Meta Ads auto-tag
];

const STORAGE_KEY = 'arqos_utm_params';

const useUTM = () => {
  // Try to read from URL first; fall back to sessionStorage
  const params = new URLSearchParams(window.location.search);

  let utms = {};
  let foundInUrl = false;

  UTM_KEYS.forEach((key) => {
    const val = params.get(key);
    if (val) {
      utms[key] = val;
      foundInUrl = true;
    }
  });

  if (foundInUrl) {
    // Save to sessionStorage so links inside the page don't lose them
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utms));
  } else {
    // No UTMs in URL, try sessionStorage (e.g. user scrolled, clicked a link)
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      try { utms = JSON.parse(stored); } catch (_) { /* noop */ }
    }
  }

  return utms;
};

export default useUTM;
