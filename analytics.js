(function () {
  const POSTHOG_KEY = "phc_REPLACE_WITH_YOUR_PROJECT_KEY";
  const POSTHOG_HOST = "https://us.i.posthog.com";
  const enabled = POSTHOG_KEY && !POSTHOG_KEY.includes("REPLACE_WITH");
  if (enabled) {
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset get_distinct_id identify set_config startSessionRecording stopSessionRecording isFeatureEnabled getFeatureFlag onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init(POSTHOG_KEY, { api_host: POSTHOG_HOST, person_profiles: "identified_only", capture_pageview: true, capture_pageleave: true, autocapture: true });
  }
  window.analytics = { enabled, capture(eventName, properties = {}) { if (enabled && window.posthog) window.posthog.capture(eventName, properties); else console.info("[telemetry demo]", eventName, properties); } };
})();
