export const META_PIXEL_CONFIG = {
  /**
   * The Meta Pixel ID.
   * You can get this from your Meta Events Manager.
   * Recommendation: Use an environment variable for production (e.g., process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID).
   */
  pixelId: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "2373726666427083",

  /**
   * Enable or disable the pixel.
   */
  isEnabled: true,

  /**
   * Track page views automatically on route changes.
   */
  autoTrackPageViews: true,
};
