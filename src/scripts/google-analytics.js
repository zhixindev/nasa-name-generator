/**
 * Google Analytics
 * Uses environment variable: PUBLIC_GA_ID
 */

const gaId = import.meta.env.PUBLIC_GA_ID;

// Skip on development environment or if not configured
if (import.meta.env.DEV) {
    console.log('[Analytics] Skipping Google Analytics on development environment');
} else if (!gaId) {
    console.log('[Analytics] PUBLIC_GA_ID not configured, skipping Google Analytics');
} else {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
        window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', gaId);

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId;
    document.head.appendChild(script);
}
