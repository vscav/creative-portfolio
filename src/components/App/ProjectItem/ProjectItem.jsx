import * as React from "react";

import ProjectHero from "./ProjectHero";
import Description from "./Description";
import ImageHero from "./ImageHero";
import Information from "./Information";
import VisualsList from "./VisualsList";
import Credits from "./Credits";

const ProjectItem = ({ project }) => {
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
    <div ref={smoothScrollingContainer}>
      {project && (
        <>
          <ProjectHero
            hero={project.hero}
            name={project.name}
            domain={project.domain}
            expertise={project.expertise}
          />
          <Description
            overview={project.overview}
            description={project.description}
          />
          <ImageHero image={project.img} />
          <Information
            clients={project.clients}
            technologies={project.technologies}
            skills={project.skills}
            date={project.date}
          />
          <VisualsList visuals={project.visuals} />
          <Credits credits={project.credits} />
        </>
      )}
    </div>
  );
};

export default ProjectItem;
