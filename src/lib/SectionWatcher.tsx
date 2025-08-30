import { useEffect } from "react";
import { useActiveStore } from "../store/active";

const SectionWatcher = () => {
  const setActive = useActiveStore((state) => state.setActive);
  useEffect(() => {
    const sections = document.querySelectorAll("section"); // or .className if you prefer

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisibleId: string | null = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleId = entry.target.id;
          }
        });

        if (mostVisibleId) {
          setActive(mostVisibleId);
        }
      },
      { threshold: 0.6 } // 60% of the section must be visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActive]);

  return null; // just a utility component, nothing to render
};

export default SectionWatcher;
