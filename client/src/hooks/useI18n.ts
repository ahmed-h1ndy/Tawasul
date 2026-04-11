import { useLocation } from "wouter";
import {
  getLanguageFromPath,
  getPathPrefix,
  isArabic,
  siteContent,
} from "@/lib/siteContent";

/**
 * Centralized i18n hook.
 * Derives language, content, RTL flag, and path prefix from the current URL.
 */
export function useI18n() {
  const [location] = useLocation();
  const language = getLanguageFromPath(location);

  return {
    language,
    content: siteContent[language],
    rtl: isArabic(language),
    prefix: getPathPrefix(language),
  };
}
