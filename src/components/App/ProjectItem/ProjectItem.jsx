import * as React from "react";

import ProjectHero from "./ProjectHero";
import Description from "./Description";
import ImageHero from "./ImageHero";
import Information from "./Information";
import VisualsList from "./VisualsList";

const ProjectItem = () => {
  const animateRequest = React.useRef();
  const smoothScrollingContainer = React.useRef();

  const smoothScrollingData = {
    ease: 0.0875,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const smoothScrolling = React.useCallback(() => {
    smoothScrollingData.current = window.scrollY;
    smoothScrollingData.previous +=
      (smoothScrollingData.current - smoothScrollingData.previous) *
      smoothScrollingData.ease;
    smoothScrollingData.rounded =
      Math.round(smoothScrollingData.previous * 100) / 100;

    smoothScrollingContainer.current.style.transform = `translateY(-${smoothScrollingData.rounded}px)`;

    animateRequest.current = requestAnimationFrame(() => smoothScrolling());
  }, [smoothScrollingData]);

  React.useEffect(() => {
    animateRequest.current = requestAnimationFrame(() => smoothScrolling());
    return () => cancelAnimationFrame(animateRequest.current);
  }, [smoothScrolling]);

  return (
    <div ref={smoothScrollingContainer} className="scroll">
      <ProjectHero />
      <Description />
      <ImageHero />
      <Information />
      <VisualsList />
    </div>
  );
};

export default ProjectItem;
