import appInsights from "applicationinsights";

let client = null;

export const initAppInsights = () => {
  const conn = process.env.APPINSIGHTS_CONNECTION_STRING;
  if (!conn) {
    console.warn("APPINSIGHTS_CONNECTION_STRING not set; using console logger.");
    return;
  }
  try {
    appInsights.setup(conn)
      .setAutoCollectRequests(true)
      .setAutoCollectPerformance(true)
      .setAutoCollectExceptions(true)
      .setAutoDependencyCorrelation(true)
      .start();
    client = appInsights.defaultClient;
  } catch (err) {
    console.warn("Failed to init Application Insights:", err.message);
  }
};

export const logger = {
  trackEvent: (name, properties) => {
    if (client) client.trackEvent({ name, properties });
    else console.log("[event]", name, properties || "");
  },
  trackTrace: (message, properties) => {
    if (client) client.trackTrace({ message, properties });
    else console.log("[trace]", message, properties || "");
  },
  trackException: (error) => {
    if (client) client.trackException({ exception: error });
    else console.error("[exception]", error && error.message ? error.message : error);
  }
};
