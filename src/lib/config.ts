export const SITE_CONFIG = {
  enableGoogleAuth: process.env.NEXT_PUBLIC_ENABLE_GOOGLE_AUTH === "true" || false,
  enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true" || true,
  enableR2Upload: process.env.NEXT_PUBLIC_ENABLE_R2_UPLOAD === "true" || false,
  enablePrivacyPolicy: process.env.NEXT_PUBLIC_ENABLE_PRIVACY_POLICY === "true" || true,
  enableTermsOfService: process.env.NEXT_PUBLIC_ENABLE_TERMS_OF_SERVICE === "true" || true,
  enableMultiLanguage: process.env.NEXT_PUBLIC_ENABLE_MULTI_LANGUAGE === "true" || false,
}; 