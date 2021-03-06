import * as React from "react";

import Arrow from "components/App/Icons/Arrow";

import {
  ProjectHeroContainer,
  ProjectHeroParallax,
  ProjectHeroInfo,
  ProjectHeroTitle,
  ProjectHeroCategory,
  ScrollDown,
} from "./styles";

const ProjectHero = (props) => {
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return (
    <ProjectHeroContainer>
      <ProjectHeroParallax
        src={require(`../../../../assets/images/${props.hero}.jpg`)}
        style={{
          opacity: `${1 - offset / 425}`,
          transform: `translateY(${offset * 0.55}px)`,
        }}
      />
      <ProjectHeroInfo
        style={{
          opacity: `${1 - offset / 325}`,
          transform: `translateY(${offset * 0.8}px)`,
        }}
      >
        <ProjectHeroTitle>{props.name}</ProjectHeroTitle>
        <ProjectHeroCategory>
          <span>{props.domain}</span>
          <span>{props.expertise}</span>
        </ProjectHeroCategory>
      </ProjectHeroInfo>
      <ScrollDown
        style={{
          opacity: offset > 90 ? 0 : 1,
        }}
      >
        <Arrow />
      </ScrollDown>
    </ProjectHeroContainer>
  );
};

export default ProjectHero;

// import * as React from "react";
// import { useSpring } from "react-spring";
// import * as easings from "d3-ease";
// import {
//   HeroImageContainer,
//   HeroImageContainerOverlay,
//   HeroImage,
// } from "./styles";
// import { Container, Flex } from "styles/global";

// import model from "assets/images/model.jpg";

// const config1 = {
//   duration: 0,
//   easing: easings.easeCubic,
// };

// const config2 = {
//   duration: 1225,
//   easing: easings.easeCubic,
// };

// const config3 = {
//   duration: 1000,
//   easing: easings.easeCubic,
// };

// const ProjectHero = () => {
//   const props1 = useSpring({
//     config: config1,
//     delay: 0,
//     from: {
//       visibility: "hidden",
//     },
//     to: {
//       visibility: "visible",
//     },
//   });

//   const props2 = useSpring({
//     config: config2,
//     delay: 800,
//     from: {
//       transform: "scale(1.45)",
//     },
//     to: {
//       transform: "scale(1)",
//     },
//   });

//   const props3 = useSpring({
//     config: config3,
//     delay: 800,
//     from: {
//       height: "100%",
//     },
//     to: {
//       height: "0",
//     },
//   });

//   return (
//     <Container style={props1}>
//       <Flex flexEnd>
//         <HeroImageContainer>
//           <HeroImageContainerOverlay style={props3} />
//           <HeroImage style={props2} src={model} />
//         </HeroImageContainer>
//       </Flex>
//     </Container>
//   );
// };

// export default ProjectHero;
