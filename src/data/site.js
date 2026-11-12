// Identity, contact, education and the three "reading lenses".
// Everything on the site is drawn from the CV (public/Sanandan_Ojha_CV.pdf).

export const PROFILE = {
  name: "Sanandan Ojha",
  school: "University of Florida",
  location: "Gainesville, Florida",
  email: "ojhasanandan@ufl.edu",
  github: "https://github.com/ojhasanandan",
  linkedin: "", // TODO: add your LinkedIn URL; the link appears once this is filled in.
  cv: "/Sanandan_Ojha_CV.pdf",
  statement:
    "I write down mathematical models of living systems, fit them to data, and ask how much the data really pins down.",
  lead:
    "I'm a senior at the University of Florida studying mathematics and biomedical engineering, with a minor in statistics. My work sits where differential equations, numerical methods and Bayesian inference meet biology and medicine.",
};

export const EDUCATION = {
  school: "University of Florida",
  dates: "August 2023 – May 2027",
  gpa: "3.91",
  degrees: ["B.S. Mathematics", "B.S. Biomedical Engineering", "Minor in Statistics"],
  // TODO: the CV has no course list. Add courses here (e.g. "Real Analysis") and a
  // "Selected coursework" block appears in the Preparation section automatically.
  coursework: [],
};

export const FACTS = [
  { value: "3.91", label: "GPA across two B.S. degrees and a statistics minor" },
  { value: "2", label: "manuscripts in preparation, plus one published article" },
  { value: "5 + 8", label: "talks and posters given since 2022" },
  { value: "11", label: "faculty and clinical research advisors" },
];

// One identity, three ways in. `?for=<id>` in the URL preselects a lens, so a
// tailored link can go in each application.
export const LENSES = [
  {
    id: "phd",
    label: "Graduate research",
    audience: "For PhD and post-baccalaureate committees",
    pitch:
      "I want to do research in applied mathematics and statistics: numerical methods for nonlinear PDEs, and inference for mechanistic models.",
    points: [
      { head: "Research output", text: "Two manuscripts in preparation, one on model selection for collective cell migration and one on an implicit lattice Boltzmann–immersed boundary method, with an honors thesis under way.", href: "/#record" },
      { head: "Mathematical preparation", text: "A mathematics B.S. alongside engineering, a statistics minor, and a directed reading of Evans on weak convergence methods for nonlinear PDEs.", href: "/#preparation" },
      { head: "Training beyond UF", text: "A summer REU in computational fluid dynamics, the Texas A&M summer school on simulating PDEs, and the Preliminary Arizona Winter School.", href: "/#preparation" },
      { head: "Communicating it", text: "Five talks and eight posters, from a nuclear medicine society meeting to undergraduate mathematics conferences.", href: "/#record" },
    ],
  },
  {
    id: "quant",
    label: "Quantitative roles",
    audience: "For quantitative research, data science and operations research teams",
    pitch:
      "I build stochastic and differential-equation models, estimate their parameters from noisy data, and write the numerical code that makes them run.",
    points: [
      { head: "Bayesian computation", text: "Sequential Monte Carlo (ABC-SMC) and global sensitivity analysis on a university supercomputer, used to fit and compare competing models.", href: "/work/gastrulation" },
      { head: "Stochastic modeling", text: "A Markov chain model of AI model collapse, named Outstanding at the SCUDEM X international modeling challenge.", href: "/work/ai-ouroboros" },
      { head: "Numerical code", text: "PDE solvers written from the equations up: finite elements for Boltzmann transport, and a lattice Boltzmann scheme made 300 steps per second faster.", href: "/work/lattice-boltzmann" },
      { head: "Data, on a deadline", text: "Three MCM/ICM contests and analyses of real datasets in R and Python: Wimbledon points, Olympic gymnastics scores, eight cycles of application decisions.", href: "/#projects" },
    ],
  },
  {
    id: "health",
    label: "Healthcare & clinical research",
    audience: "For healthcare, clinical and biomedical research groups",
    pitch:
      "My first research was in a radiology department, and I have kept one foot in the clinic since. I bring quantitative methods to questions clinicians ask.",
    points: [
      { head: "Clinical evidence", text: "A published article on PSMA theranostics and two outcome-correlation studies in nuclear medicine, one in prostate PET imaging and one in radium-223 therapy.", href: "/work/theranostics" },
      { head: "Models of disease", text: "Mechanistic modeling of primary graft dysfunction after lung transplant, sepsis in bone marrow, and restenosis in stented arteries.", href: "/#research" },
      { head: "Tools for clinicians", text: "Synthetic MRI from CT for deep brain stimulation planning, and surgical simulators tested with residents and presented at BMES 2026.", href: "/work/surgical-simulators" },
      { head: "Time in the clinic and the lab", text: "Shadowing in radiology, oncology and nuclear medicine, wet-lab protein work, and Basic Life Support certification.", href: "/#beyond" },
    ],
  },
];

export const INTERESTS = [
  {
    title: "Numerical methods for nonlinear PDEs",
    text: "How to design schemes that stay stable and accurate when the equation is stiff or nonlinear, and how to prove that they do. I have built solvers; I want the theory behind them.",
  },
  {
    title: "Inference and uncertainty for mechanistic models",
    text: "Parameter estimation, sensitivity analysis and model selection when the likelihood is out of reach and the data are sparse. Which parts of a model can an experiment identify at all?",
  },
  {
    title: "Mathematical biology and medicine",
    text: "Continuum and agent-based models of cells and tissues, and mechanistic models of disease that could one day inform a clinical decision.",
  },
  {
    title: "Stochastic modeling and decisions",
    text: "Markov chains, Monte Carlo methods and data-driven models for systems where randomness is the point, from epidemics to rankings.",
  },
];

export const TRAJECTORY = [
  { when: "2022", title: "The clinic first", text: "Before college, a summer in radiology at the University of Pittsburgh: collating imaging and outcome data on PSMA PET, a first published article, and a first conference talk." },
  { when: "2023–24", title: "Bench and build", text: "At UF: purifying DNA repair proteins in a biochemistry lab, designing 3D-printed heart device models for pediatric patients, and a first agent-based model with iGEM." },
  { when: "2024–25", title: "Models that compute", text: "Diffusion models that generate MRI from CT, then a summer REU in Indianapolis building a lattice Boltzmann method for cells in viscous flow." },
  { when: "2025–26", title: "Models that answer to data", text: "Mathematical biology with Dr. Tracy Stepien: a two-layer model of migrating cells, fit with sequential Monte Carlo on a supercomputer. Modeling contests alongside." },
  { when: "Now", title: "Toward the theory", text: "An honors thesis on liver microcirculation, a mechanistic model of lung transplant injury, and a directed reading in the analysis of nonlinear PDEs." },
];
