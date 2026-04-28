/**
 * Microsoft Clarity
 * Uses environment variable: PUBLIC_CLARITY_ID
 */

const clarityId = import.meta.env.PUBLIC_CLARITY_ID;

// Skip on development environment or if not configured
if (import.meta.env.DEV) {
    console.log('[Analytics] Skipping Microsoft Clarity on development environment');
} else if (!clarityId) {
    console.log('[Analytics] PUBLIC_CLARITY_ID not configured, skipping Microsoft Clarity');
} else {
    var script = document.createElement('script');

    window.clarity = window.clarity || function () {
        (window.clarity.q = window.clarity.q || []).push(arguments);
    };

    script.async = true;
    script.src = 'https://www.clarity.ms/tag/' + clarityId;
    document.head.appendChild(script);
}
