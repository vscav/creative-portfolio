const projects = {
  wodabest: {
    id: 1,
    name: "Wodabest",
    domain: "Social media",
    expertise: "Full stack development",
    clients: ["Student project"],
    skills: [
      "UX / UI",
      "Interactive Design",
      "Art direction",
      "HTML Integration",
      "Back office",
    ],
    technologies: ["Vue", "Laravel"],
    date: "2020-05",
    overview: "A Tinder like Art gallery with a REST architecture.",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis at mi ac consectetur. Duis justo urna, vulputate sed tellus quis, cursus varius purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus metus accumsan massa sollicitudin semper. Suspendisse hendrerit ipsum a maximus commodo. Fusce ut quam fermentum, faucibus neque tincidunt, placerat tellus. Phasellus hendrerit auctor mi ac venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "Nullam eu ipsum magna. Etiam a quam ut magna cursus viverra vel ut tellus.",
    ],
    img: "model",
    hero: "model",
    visuals: ["model", "model", "model"],
    link: "https://github.com/vscav/wodabest-RESTful",
    next: 2,
  },
  "lit-drum-pad": {
    id: 2,
    name: "Lit Drum Pad",
    domain: "Music application",
    expertise: "Front end development",
    clients: ["Personal project"],
    skills: [
      "UX / UI",
      "Interactive Design",
      "Art direction",
      "HTML Integration",
      "Back office",
    ],
    technologies: ["Vue"],
    date: "2020/08",
    overview: "A drum machine built with Vue/TypeScript and the Web Audio API.",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis at mi ac consectetur. Duis justo urna, vulputate sed tellus quis, cursus varius purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus metus accumsan massa sollicitudin semper. Suspendisse hendrerit ipsum a maximus commodo. Fusce ut quam fermentum, faucibus neque tincidunt, placerat tellus. Phasellus hendrerit auctor mi ac venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "Nullam eu ipsum magna. Etiam a quam ut magna cursus viverra vel ut tellus.",
    ],
    img: "model",
    hero: "model",
    visuals: ["model", "model"],
    link: "https://lit-drum-pad.herokuapp.com/",
    next: 1,
  },
};

const projectsReducer = (state = projects, action) => {
  return state;
};

export default projectsReducer;
