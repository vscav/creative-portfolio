import * as React from "react";

import ProjectHero from "./ProjectHero";
import Description from "./Description";
import ImageHero from "./ImageHero";
import Information from "./Information";
import VisualsList from "./VisualsList";

const ProjectItem = () => {
  return (
    <>
      <ProjectHero />
      <Description />
      <ImageHero />
      <Information />
      <VisualsList />
    </>
  );
};

export default ProjectItem;
