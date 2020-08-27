import { RefObject, useEffect, useState } from 'react';
import throttle from 'lodash/fp/throttle';

const useScrollSpy = ({
    activeSectionDefault = 0,
    offsetPx = 0,
    sectionElementRefs,
    throttleMs = 100,
    top = true
}: {
    activeSectionDefault?: number;
    offsetPx?: number;
    sectionElementRefs: Array<RefObject<HTMLElement>>;
    throttleMs?: number;
    top?: boolean;
}) => {
    const [activeSection, setActiveSection] = useState(activeSectionDefault);

    const handle = throttle(throttleMs, () => {
        let currentSectionId = activeSection;
        if (top) {
            for (let i = 0; i < sectionElementRefs?.length || 0; i++) {
                const section = sectionElementRefs[i].current;
                // Needs to be a valid DOM Element
                if (!section || !(section instanceof Element)) continue;
                // GetBoundingClientRect returns values relative to viewport
                if (section.getBoundingClientRect().top + offsetPx < 0) {
                    currentSectionId = i;
                    continue;
                }
                // No need to continue loop, if last element has been detected
                break;
            }
        } else {
            // Scroll Spy from Bottom to Top
            for (let i = sectionElementRefs?.length || 0; i > 0; i--) {
                const section = sectionElementRefs[i].current;
                // Needs to be a valid DOM Element
                if (!section || !(section instanceof Element)) continue;
                // GetBoundingClientRect returns values relative to viewport
                if (section.getBoundingClientRect().bottom + offsetPx < 0) {
                    currentSectionId = i;
                    continue;
                }
                // No need to continue loop, if last element has been detected
                break;
            }
        }
        setActiveSection(currentSectionId);
    });

    useEffect(() => {
        window.addEventListener('scroll', handle);

        return () => {
            window.removeEventListener('scroll', handle);
        };
    }, [sectionElementRefs, offsetPx, handle]);
    return activeSection;
};
export default useScrollSpy;
