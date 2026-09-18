// Basic GA4 Button Click Tracking for Marketing Campaigns
document.getElementById('cta-button').addEventListener('click', function() {
  gtag('event', 'lead_conversion', {
    'event_category': 'Meta_Ads',
    'event_label': 'Landing_Page_Click'
  });
});