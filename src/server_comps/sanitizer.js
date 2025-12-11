import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

// Create a fake window for DOMPurify (works in Node.js)
const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

export function sanitizeHTML(dirty) {
  return DOMPurify.sanitize(dirty, {
    USE_PROFILES: { html: true }, // basic safe HTML
  });
}
