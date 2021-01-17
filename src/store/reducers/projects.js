const projects = {
  wodabest: {
    name: "Wodabest",
    date: "05/20",
    client: "Student project",
    role: "Full stack developer",
    technologies: ["Vue", "Laravel"],
    overview: "A Tinder like Art gallery with a REST architecture.",
    description: "",
    img: "wodabest.jpg",
    link: "https://github.com/vscav/wodabest-RESTful",
    next: "lit-drum-pad",
  },
  "lit-drum-pad": {
    name: "Lit Drum Pad",
    date: "08/20",
    client: "Personal project",
    role: "Front end developer",
    technologies: ["Vue"],
    overview: "A drum machine built with Vue/TypeScript and the Web Audio API.",
    description: "",
    img: "lit-drum-pad.jpg",
    link: "https://lit-drum-pad.herokuapp.com/",
    next: "wodabest",
  },
};

const projectsReducer = (state = projects, action) => {
  return state;
};

export default projectsReducer;
