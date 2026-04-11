# Tawasul preview QA notes

## English homepage

The English homepage loads successfully in the live preview with the intended premium dark navy presentation, gold-accented calls to action, and editorial serif headline styling. The hero section is visually strong, the logo is visible, and the main navigation is present.

The page content extracted in the preview confirms that the home sections render correctly: hero copy, business stats, service overview, trust-building reasons, and a closing call to action.

## Initial observations

The overall visual direction aligns with the intended corporate positioning. The top header may feel slightly dense on first load because the navigation pill sits directly beneath the brand block in the same sticky area, but this is still within an acceptable professional range.

Next checks required: Arabic language switch, RTL layout behavior, subpage navigation, and contact form interaction.

## Arabic homepage and RTL check

The Arabic homepage loads correctly at the `/ar` path and the document title switches to Arabic. The navigation order, hero content alignment, and overall page composition visibly reverse for RTL presentation rather than remaining in an LTR layout with translated text only.

The Arabic typography is readable and visually balanced against the dark background. The headline hierarchy remains strong, and the gold call-to-action button still stands out effectively within the RTL composition.

The bilingual switcher behavior is functioning correctly in both directions based on the current preview checks.

## Arabic contact page check

The Arabic contact page loads correctly and preserves RTL layout across the hero area, contact information cards, and the form fields. The page composition remains visually balanced even with long Arabic headings.

The contact form fields accepted test input successfully for name, company, email, phone, and message. This confirms that the form is interactive and usable in the Arabic experience. The next optional step would be submitting the form to verify the success toast message.
