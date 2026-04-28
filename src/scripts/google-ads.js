/**
 * Google Ads
 * Uses environment variable: PUBLIC_ADS_CLIENT_ID
 */

const adsClientId = import.meta.env.PUBLIC_ADS_CLIENT_ID;

// Skip on development environment
if (import.meta.env.DEV) {
    console.log('[Ads] Skipping Google Ads on development environment');
} else if (!adsClientId) {
    console.log('[Ads] PUBLIC_ADS_CLIENT_ID not configured, skipping Google Ads');
} else {
    var script = document.createElement('script');
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + adsClientId;
    document.head.appendChild(script);
}
