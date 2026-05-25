/**
 * Replace with your live feedback form URL (Google Form, Tally, Typeform, etc.)
 * before sharing widely. While this is "#feedback-form", the CTA scrolls to the
 * feedback section on the landing page.
 */
export const FEEDBACK_FORM_URL = "#feedback-form";

export function getFeedbackHref() {
  if (FEEDBACK_FORM_URL.startsWith("#")) {
    return `/${FEEDBACK_FORM_URL}`;
  }
  return FEEDBACK_FORM_URL;
}

export function isExternalFeedbackLink() {
  return FEEDBACK_FORM_URL.startsWith("http");
}
