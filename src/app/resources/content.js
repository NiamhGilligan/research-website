
const person = {
  firstName: "Mason",
  lastName: "Group",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  languages: ["English"]
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/karl-mason-41581b8b/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:example@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}`,
  description: ``,
  headline: <>The Mason Research Group</>,
  subline: (
    <>
     <span style={{ fontWeight: 'bold', color: '#84F6C3' }}>Autonomous-Agents-Research.com</span>
     <br />School of Computer Science,
      <br /> University of Galway
    </>
  ),
  mission: (
    <>
      The aim of our research group is to develop new and effective Artificial
      Intelligence and Machine Learning algorithms and to apply these algorithms
      to solve real world problems.
    </>
  ),
  funding: (
    <>
      The research conducted within this research group is supported by funding
      from sources including: Research Ireland (Science Foundation Ireland,
      Irish Research Council), Enterprise Ireland, and the Royal Irish Academy.
    </>
  ),
};

const news = {
  label: "News",
  title: "Latest News",
  description: ``,
  newsItems: [
    {
      id: "junlin-phd-defense",
      date: "02 July 2025",
      title:
        "Congratulations to Junlin Lu who successfully defended his PhD earlier today!",
      content:
        "Congratulations to Junlin Lu who successfully defended his PhD earlier today!",
      category: "PhD Defense",
      featured: true,
      image: {
        src: "/images/news/junlinphdexam2.webp",
        alt: "Junlin Lu PhD Defense",
      },
    },
    {
      id: "iase-workshop-ecai-2025",
      date: "26 March 2025",
      title: "IASE Workshop at ECAI 2025",
      content:
        "We are organizing the IASE Workshop co-located with ECAI 2025 in Bologna, Italy between 25th-30th October, 2025. For details about the workshop, see the workshop website.",
      category: "Workshop",
      featured: true,
      link: "https://sites.google.com/view/iase-2025/home",
    },
    {
      id: "lo-marve-presentation",
      date: "12 November 2024",
      title:
        "Lo-MARVE: A Low Cost Autonomous Underwater Vehicle for Marine Exploration",
      content:
        'It was great to present our paper "Lo-MARVE: A Low Cost Autonomous Underwater Vehicle for Marine Exploration" at the 12th International Conference on Control, Mechatronics and Automation (ICCMA 2024) in London today.',
      category: "Conference Presentation",
      featured: true,
    },
    {
      id: "aiprint-sfi-challenge",
      date: "12 August 2024",
      title: "aiPRINT Project Selected for SFI National Challenge Fund",
      content:
        "Happy to share that our project, aiPRINT, has been selected to go through to the grow phase of the SFI National Challenge Fund.",
      category: "Funding",
      featured: true,
      image: {
        src: "/images/images-previous/ncf-ribbon-2024.png",
        alt: "NCF Ribbon 2024",
      },
    },
    {
      id: "iase-workshop-paams-2024",
      date: "28 June 2024",
      title: "IASE Workshop at PAAMS 2024",
      content:
        "It was great to chair the IASE workshop at the 2024 PAAMS conference in Salamanca, Spain today. There was great discussion amongst participants doing research on a wide range of topics including AI, machine learning, agents, multi-agent systems, robotics, and other applications.",
      category: "Workshop",
      featured: true,
      image: {
        src: "/images/news/IASE_Workshop_PAAMS_2.jpg",
        alt: "IASE Workshop PAAMS 2024",
      },
    },
    {
      id: "research-innovation-panel",
      date: "9 May 2024",
      title: "College of Science and Engineering Research and Innovation Day",
      content:
        "It was great to participate in the College of Science and Engineering Research and Innovation Day panel discussion on research today. Thanks to all who attended.",
      category: "Panel Discussion",
      featured: true,
      image: {
        src: "/images/news/PanelDiscussionMay2024.jpg",
        alt: "Panel Discussion May 2024",
      },
    },
    {
      id: "postdoc-recruitment-eire-aiai",
      date: "2 April 2024",
      title: "Postdoctoral Researcher Recruitment - EIRE AIAI",
      content:
        "I am currently recruiting 2 Postdoctoral Researchers to join our SFI funded project EIRE AIAI. The closing date for applications is 30/04/2024 at 5.00pm (Irish time). Update 1 May 2024: I am no longer accepting new applications for this role.",
      category: "Recruitment",
      featured: false,
    },
    {
      id: "icccsp-2024-keynote",
      date: "21 March 2024",
      title: "Keynote Talk at ICCCSP 2024",
      content:
        "It was great to give the keynote talk at ICCCSP 2024 this morning. Thanks to all who attended.",
      category: "Keynote",
      featured: true,
      image: {
        src: "/images/news/icccsp-2024-keynote.png",
        alt: "ICCCSP 2024 keynote",
      },
    },
    {
      id: "junlin-iet-paper",
      date: "20 March 2024",
      title: "Junlin's IET Smart Grid Paper Recognition",
      content:
        "Congratulations to my PhD student, Junlin, co-supervised with Dr. Patrick Mannion. Junlin's IET Smart Grid journal paper was listed as one of the most highly read journal papers published in IET Smart Grid.",
      category: "Publication",
      featured: true,
      image: {
        src: "/images/news/junlin_iet_smartgrid.png",
        alt: "Junlin IET Smart Grid",
      },
    },
    {
      id: "iase-workshop-paams-2024-announcement",
      date: "2 February 2024",
      title: "IASE Workshop at PAAMS 2024",
      content:
        "We are organising a workshop on Intelligent Agents in Science and Engineering (IASE), held in conjunction with the PAAMS 2024 international conference, located in Salamanca, Spain from the 26th-28th June, 2024. The IASE workshop aims to bring together researchers and developers from industry and academia interested in the fields of intelligent agents and multi-agent systems, and also their application within science and engineering. Authors are invited to submit papers to be considered for this workshop. This workshop will be a hybrid event, i.e. both in person and virtual. IMPORTANT DATES: Paper submission deadline: 15th March, 2024, Notification of acceptance: 26th April, 2024, Camera-Ready papers: 17th May, 2024, Workshop date: 26th-28th June, 2024 (TBC). For more information, here is the link to our workshop: Workshop link.",
      category: "Workshop",
      featured: false,
    },
    {
      id: "multi-agent-energy-trading-paper",
      date: "18 January 2024",
      title: "Multi-agent Systems in Peer-to-Peer Energy Trading Paper",
      content:
        'Our most recent journal paper entitled "Multi-agent systems in Peer-to-Peer energy trading: A comprehensive survey" has just been published in Engineering Applications of Artificial Intelligence, Elsevier (Impact Factor 8). Well done to Ibad for preparing this paper. The paper can be accessed using the following link: Click Here!',
      category: "Publication",
      featured: true,
    },
    {
      id: "dlspa-workshop-ecml-2023",
      date: "22 September 2023",
      title: "Deep Learning for Sustainable Precision Agriculture Workshop",
      content:
        "It was great to deliver one of the keynote talks at the Deep Learning for Sustainable Precision Agriculture (DLSPA) Workshop, at ECML PKDD 2023. Thanks to all who attended. This was a great event with lots of engagement from researchers in the area.",
      category: "Workshop",
      featured: true,
      image: {
        src: "/images/images-previous/DLSPA Workshop ECML2023.png",
        alt: "DLSPA Workshop ECML 2023",
      },
    },
    {
      id: "aiprint-postdoc-recruitment",
      date: "8 June 2023",
      title: "Postdoctoral Researcher Recruitment - aiPRINT",
      content:
        "My colleague, Dr. Andrew Daly, and I are currently recruiting a Postdoctoral Researcher to join our SFI funded project on Artificial Intelligence-powered 3D printing. If you are interested, please see advertisement here: Advert 144-22. The closing date for applications is 22/06/2023 at 5.00pm (Irish time).",
      category: "Recruitment",
      featured: false,
    },
    {
      id: "anthony-evoapplications-2023",
      date: "13 April 2023",
      title: "Anthony Horgan's MSc Research Presentation",
      content:
        "Congratulations to my former MSc student, Anthony Horgan, who just presented his MSc research on evolutionary robotics at the 26th International Conference, EvoApplications 2023. Anthony received the highest grade in his MSc class for his research. Link to Anthony's Paper.",
      category: "Student Achievement",
      featured: true,
      image: {
        src: "/images/news/springerevostar23.png",
        alt: "Springer EvoStar 23",
      },
      link: "https://link.springer.com/chapter/10.1007/978-3-031-30229-9_38",
    },
    {
      id: "aiprint-sfi-funding",
      date: "29 January 2023",
      title: "aiPRINT Project SFI Funding",
      content:
        'We were recently awarded funding from SFI for an 18 month project named "Artificial intelligence-powered 3D printing – aiPRINT". It is funded by SFI\'s National Challenge Fund programme. I am co-investigator on new this project which is led by Dr. Andrew Daly (PI) from Curam.',
      category: "Funding",
      featured: true,
      image: {
        src: "/images/news/SFI_logo.jpg",
        alt: "SFI Logo",
      },
    },
    {
      id: "bristol-robotics-talk",
      date: "14 June 2022",
      title: "Talk at Bristol Robotics Laboratory",
      content:
        "I was invited to do a talk on my research at the Bristol Robotics Laboratory today. Thanks to all who attended.",
      category: "Invited Talk",
      featured: true,
      image: {
        src: "/images/news/brl_img.png",
        alt: "Bristol Robotics Laboratory",
      },
    },
    {
      id: "bristol-robotics-visit",
      date: "1 June 2022",
      title: "Research Visit to Bristol Robotics Laboratory",
      content:
        "Excited to be visiting the Bristol Robotics Laboratory, UK. Thanks to the Royal Irish Academy for supporting this research visit. Also thanks to the Bristol Robotics Laboratory and Dr. Sabine Hauert for hosting me!",
      category: "Research Visit",
      featured: true,
      image: {
        src: "/images/news/brl_img.png",
        alt: "RIA Black",
      },
    },
    {
      id: "junlin-iet-paper-publication",
      date: "13 May 2022",
      title: "Multi-objective Multi-agent Deep Reinforcement Learning Paper",
      content:
        'Congratulations to Junlin Lu, the first author of our most recent journal paper "A multi-objective multi-agent deep reinforcement learning approach to residential appliance scheduling" published in the Wiley journal IET Smart Grid today. Click here to read the paper.',
      category: "Publication",
      featured: true,
    },
    {
      id: "eire-aiai-sfi-grant",
      date: "11 May 2022",
      title: "EIRE AIAI SFI Frontiers for the Future Grant",
      content:
        'Excited to announce that I have been awarded an Science Foundation Ireland (SFI) Frontiers for the Future grant to support my upcoming project "Effective Integration of Renewable Energy within the Agriculture Sector in Ireland using Artificial Intelligence (EIRE AIAI)". Thanks to NUIG and SFI for supporting this project. Also, congrats to my colleagues who were also awarded grants! SFI Press Release Link.',
      category: "Funding",
      featured: true,
      image: {
        src: "/images/news/SFI_logo.jpg",
        alt: "SFI Logo",
      },
      link: "https://www.sfi.ie/research-news/news/harris-research-grants/",
    },
    {
      id: "postdoc-phd-recruitment-2022",
      date: "20 April 2022",
      title: "Postdoctoral Researcher and PhD Student Recruitment",
      content:
        "I am happy to announce that I have openings for 1 Postdoctoral Researcher and 4 PhD students within my research group in the School of Computer Science at NUI Galway. You will work on an interdisciplinary project developing Artificial Intelligence (AI) algorithms and applying these AI algorithms to integrate renewable energy within the agriculture sector. Edit (18/08/2022): I am not currently accepting any new applications for the 4 PhD positions or postdoc position. Any future changes to this will be announced on this website.",
      category: "Recruitment",
      featured: false,
    },
    {
      id: "summer-research-scholarship-2022",
      date: "28 March 2022",
      title: "Summer Research Scholarship Applications",
      content:
        "We are accepting applications for the 2022 School of Computer Science Summer Research Scholarship at NUI Galway.",
      category: "Scholarship",
      featured: false,
    },
    {
      id: "imofi-final-report",
      date: "11 January 2022",
      title: "IMoFi Final Report Release",
      content:
        "The IMoFi – Intelligent Model Fidelity: Physics-Based Data-Driven Grid Modeling to Accelerate Accurate PV Integration Final Report has been released.",
      category: "Report",
      featured: false,
      link: "http://researchgate.net/publication/357715121_IMoFi_-_Intelligent_Model_Fidelity_Physics-Based_Data-Driven_Grid_Modeling_to_Accelerate_Accurate_PV_Integration_Final_Report",
    },
    {
      id: "ieee-cec-2021-presentation",
      date: "01 July 2021",
      title: "IEEE CEC 2021 Conference Presentation",
      content: "Our work was presented at the 2021 IEEE CEC conference today.",
      category: "Conference Presentation",
      featured: true,
      image: {
        src: "/images/images-previous/IEEE_CEC_2021_SlideImage.png",
        alt: "IEEE CEC 2021 Slide Image",
      },
    },
    {
      id: "applied-energy-paper-2021",
      date: "05 May 2021",
      title: "Applied Energy Journal Paper Publication",
      content:
        "Our Applied Energy journal paper 'Investing in generation and storage capacity in a liberalised electricity market: an agent based approach' is now available online: Click Here!",
      category: "Publication",
      featured: true,
    },
    {
      id: "ieee-cec-2021-acceptance",
      date: "06 April 2021",
      title: "IEEE CEC 2021 Paper Acceptance",
      content:
        "Research with colleagues at the Georgia Institute of Technology has just been accepted for publication at the 2021 IEEE Congress on Evolutionary Computation (CEC) conference. Our paper is entitled 'Building HVAC Control via Neural Networks and Natural Evolution Strategies'.",
      category: "Publication",
      featured: false,
    },
    {
      id: "applied-energy-paper-acceptance",
      date: "01 April 2021",
      title: "Applied Energy Paper Acceptance",
      content:
        "Research with colleagues at Cardiff University has just been accepted for publication in the journal Applied Energy. Our paper is entitled 'Investing in generation and storage capacity in a liberalised electricity market: an agent based approach'.",
      category: "Publication",
      featured: false,
    },
    {
      id: "ker-special-issue",
      date: "27 January 2021",
      title: "Special Issue on Evolutionary Machine Learning",
      content:
        "Our Special Issue on Evolutionary Machine Learning in The Knowledge Engineering Review is now open for submissions. Myself and Dr. Patrick Mannion are guest editors for this Special Issue. More details can be found on the journal website.",
      category: "Special Issue",
      featured: true,
      image: {
        src: "/images/images-previous/ker_journal.png",
        alt: "KER Journal",
      },
    },
    {
      id: "ieee-tpec-2021-acceptance",
      date: "21 January 2021",
      title: "IEEE TPEC 2021 Paper Acceptance",
      content:
        "Research with colleagues at the Georgia Institute of Technology has recently been accepted for publication at the 2021 IEEE Texas Power and Energy Conference (TPEC). Our paper is entitled 'Detecting Behind-the-Meter PV Installation Using Convolutional Neural Networks'.",
      category: "Publication",
      featured: false,
    },
    {
      id: "reinforcement-learning-review-paper",
      date: "5th August 2019",
      title:
        "Reinforcement Learning for Autonomous Building Energy Management Review",
      content:
        "The final published version of our review article 'A review of reinforcement learning for autonomous building energy management' is available at the following link: Click Here!",
      category: "Publication",
      featured: true,
      link: "https://arxiv.org/pdf/1903.05196v2",
    },
    {
      id: "eurai-dissertation-award-nomination",
      date: "13th May 2019",
      title: "EurAI Artificial Intelligence Dissertation Award Nomination",
      content:
        "I am delighted to have been nominated for the 2018 EurAI Artificial Intelligence Dissertation Award!",
      category: "Award",
      featured: true,
    },
    {
      id: "reinforcement-learning-review-preprint",
      date: "15th March 2019",
      title: "Reinforcement Learning Review Paper Preprint",
      content:
        "A preprint of our new paper reviewing the applications of reinforcement learning for building energy management is available on arxiv!",
      category: "Publication",
      featured: false,
      link: "https://arxiv.org/pdf/1903.05196v2",
    },
  ],
};

const team = {
  label: "Team Members",
  title: "Research Team",
  description: ``,
  principalInvestigator: {
    name: "Dr. Karl Mason",
    title: "Principal Investigator",
    position: "Lecturer Above the Bar (Assistant Professor)",
    institution: "School of Computer Science, University of Galway",
    avatar: "/images/images-previous/karl.jpeg",
    bio: "Dr. Karl Mason is a Lecturer Above the Bar (Assistant Professor) in the School of Computer Science at University of Galway. He is a Research Ireland funded Principal Investigator. To date, he has secured over €2.1 million in research funding. He supervises /co-supervises 12 funded researchers at the University of Galway.",
    background: [
      "Previously, he has held appointments as a visiting Academic at the Bristol Robotics Laboratory, UK. This work was supported by the Charlemont Award from the Royal Irish Academy.",
      "He was also a Postdoctoral Researcher in the CIREGS lab at Cardiff University, UK (funded by the EPSRC) and a Postdoctoral Fellow at the Georgia Institute of Technology, USA within the ACES Research Group, in collaboration with Sandia National Laboratories. His work here was funded by Sandia National Laboratories and the National Science Foundation.",
      "He completed his PhD in Computer Science at University of Galway. This PhD dissertation was nominated for the European AI PhD Dissertation award.",
    ],
    research:
      "Dr. Mason's research broadly falls under the heading of AI and machine learning, but explores multiple topics including: neural networks, evolutionary computing, reinforcement learning, multi-agent systems, swarm intelligence and robotics. He has also applied these algorithms to problems including: renewable energy, smart homes, infrastructure planning, smart grid and cloud computing.",
    profiles: [
      {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?hl=en&view_op=list_works&authuser=1&gmla=AJsN-F6U7RFLJVHk_P6J5rJc-yn5wDYFsRd_gXE14cgpNx1X2K3l2k1XHHlz8KKiyr6fURN84i0LyCucixsemWSmVCbAiFhSSA&user=kxcJG50AAAAJ",
      },
      {
        name: "ResearchGate",
        url: "https://www.researchgate.net/profile/Karl-Mason-2",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/karl-mason-41581b8b/",
      },
      {
        name: "University of Galway",
        url: "https://research.universityofgalway.ie/en/persons/karl-mason",
      },
    ],
  },
  postdoctoralResearchers: [
    {
      name: "Dr. Usman Haider",
      period: "2024 – present",
      funder: "Research Ireland",
    },
    {
      name: "Dr. Marcos Cruz",
      period: "2024 – present",
      funder: "Research Ireland",
    },
    {
      name: "Dr. Abdul Wahid",
      period: "2022 – 2023",
      funder: "Research Ireland",
    },
  ],
  affiliatedResearchers: [
    {
      name: "Dr. Vasileios Sergis",
      period: "2023 – present",
      funder: "Research Ireland",
      affiliation: "Primary affiliation – The Daly Research Group",
    },
    {
      name: "Dr. Daniel Kelly",
      period: "2023 – present",
      funder: "Research Ireland",
      affiliation: "Primary affiliation – The Daly Research Group",
    },
  ],
  fundedPhDStudents: [
    {
      name: "Iias Faiud",
      period: "Oct 2022 – 2026",
      funder: "Research Ireland",
    },
    {
      name: "Mian Ibad",
      period: "Oct 2022 – 2026",
      funder: "Research Ireland",
    },
    {
      name: "Hossein Khaleghy",
      period: "Oct 2022 – 2026",
      funder: "Research Ireland",
    },
    {
      name: "Nawazish Ali",
      period: "Oct 2022 – 2026",
      funder: "Research Ireland",
    },
    { name: "Jonaid Shianifar", period: "Oct 2022 – 2026", funder: "CoSE" },
    {
      name: "Junlin Lu",
      period: "Oct 2021 – 2025",
      funder: "Research Ireland",
    },
    {
      name: "Adam Callaghan",
      period: "Oct 2021 – 2025",
      funder: "Research Ireland CRT AI",
    },
    { name: "Sean Curley", period: "Oct 2021 – 2025", funder: "CoSE" },
  ],
  fundedResearchAssistants: [
    {
      name: "Lukasz Szemet",
      period: "2025 – present",
      funder: "Research Ireland",
    },
    {
      name: "Sofiia Biedakova",
      period: "2025",
      funder: "University of Galway, School of CS",
    },
    {
      name: "Raveena Raveendra Naik",
      period: "2024 – 2025",
      funder: "Research Ireland",
    },
    {
      name: "Kris Montvydas",
      period: "2022",
      funder: "University of Galway, School of CS",
    },
    { name: "Khadija Sitabkhan", period: "2021", funder: "Enterprise Ireland" },
    {
      name: "Ethan Goodfellow",
      period: "2021",
      funder: "University of Galway, School of CS",
    },
  ],
  studentProjects:
    "Multiple MSc and BSc student projects are supervised each year.",
};

const work = {
  label: "Research Projects",
  title: "Research Projects",
  description: `Research projects and developments by ${person.name}`,
  projects: [
    {
      id: "auv",
      title: "Autonomous Underwater Vehicles",
      subtitle: "Lo-MARVE: Low-cost Marine Autonomous Robotic Vehicle Explorer",
      description:
        "This project developed the Low-cost Marine Autonomous Robotic Vehicle Explorer (Lo-MARVE), a novel autonomous underwater vehicle (AUV) designed to provide a low cost solution for underwater exploration and environmental monitoring in shallow water environments.",
      details: [
        "Lo-MARVE offers a cost-effective alternative to existing AUVs, featuring a modular design, low-cost sensors, and wireless communication capabilities.",
        "The total cost of Lo-MARVE is approximately EUR 500.",
        "Lo-MARVE is developed using the Raspberry Pi 4B microprocessor, with control software written in Python.",
        "The proposed AUV was validated through field testing outside of a laboratory setting, in a freshwater environment in Galway, Ireland.",
        "This demonstrates its ability to navigate autonomously, collect data, and communicate effectively outside of a controlled laboratory setting.",
        "The successful deployment of Lo-MARVE in a real-world environment validates its proof of concept.",
      ],
      images: [
        {
          src: "/images/projects/Lo-MARVE_VideoWebsite.mp4",
          alt: "Lo-MARVE Autonomous Underwater Vehicle",
          caption: "Lo-MARVE in action",
        },
      ],
      technologies: [
        "Raspberry Pi 4B",
        "Python",
        "Autonomous Navigation",
        "Environmental Monitoring",
      ],
      funding: "Research Ireland",
      status: "Completed",
    },
    {
      id: "robotic-arm",
      title: "Advances in Artificial Intelligence Robotic Arm Control",
      subtitle: "Neuroevolution for Robotic Arm Control",
      description:
        "This project aims to explore the effectiveness of evolutionary neural networks (Neuroevolution) for robotic arm control.",
      details: [
        "Developing effective and adaptive robotic arm controllers is crucial for many industries, e.g. manufacturing.",
        "Traditional pre-programmed controllers cannot adapt to changing environments.",
        "The first set of simulations (Published at EvoApps 2023) investigates how neuroevolution can be used to develop robotic arm controllers and addresses key gaps in the existing literature, such as incorporating expert demonstrations and analyzing the robustness of evolved controllers.",
        "In addition to addressing these questions, this work compares different controller architectures and training algorithms.",
        "The proposed evolutionary neural network motion controller can accurately complete the random target reaching task, moving to within 1.7 cm from the target on average.",
        "An evolutionary supervisor neural network approach is also proposed to solve the pick-and-place task.",
        "The proposed method achieves a high successful completion rate, 927 out of 1000 trials.",
      ],
      images: [
        {
          src: "/images/projects/WebsiteContentRoboticArm2.mp4",
          alt: "Robotic Arm V-REP Simulation",
          caption: "V-REP Simulation",
        },
      ],
      technologies: [
        "Neuroevolution",
        "Neural Networks",
        "Robotic Control",
        "V-REP Simulation",
      ],
      funding: "Research Ireland",
      status: "Ongoing",
      publication: "EvoApps 2023",
    },
    {
      id: "aiprint",
      title: "Artificial intelligence-powered 3D printing (aiPRINT)",
      subtitle: "NCF Ribbon 2024",
      description:
        "aiPRINT develops a machine-learning pipeline that leverages computer vision for fully automated closed-loop 3D printing technology.",
      details: [
        "This work is funded by the Science Foundation Ireland and is conducted in collaboration with Dr. Andy Daily from Curam.",
        "The project focuses on developing intelligent 3D printing systems that can adapt and optimize printing processes in real-time.",
        "Computer vision is used to monitor and control the printing process automatically.",
        "The system aims to improve print quality, reduce waste, and increase efficiency in 3D printing operations.",
      ],
      images: [
        {
          src: "/images/projects/aiPRINTWebsiteContent.mp4",
          alt: "aiPRINT Project Logo",
          caption: "aiPRINT Logo",
        },
        {
          src: "/images/images-previous/aiPrintImage3.png",
          alt: "aiPRINT Research Results",
          caption: "Research Results",
        },
      ],
      technologies: [
        "Machine Learning",
        "Computer Vision",
        "3D Printing",
        "Automation",
      ],
      funding: "Science Foundation Ireland",
      status: "Ongoing",
      award: "NCF Ribbon 2024",
    },
    {
      id: "eire-aiai",
      title:
        "Effective Integration of Renewable Energy within the Agriculture Sector in Ireland using Artificial Intelligence – EIRE AIAI",
      subtitle: "AI for Dairy Farming Energy Efficiency",
      description:
        "Dairy farming is a very energy intensive form of farming. In order to decarbonise the dairy farming sector, it is necessary to better integrate renewable energy generation into dairy farming.",
      details: [
        "This project proposes using Artificial Intelligence methods to effectively integrate renewable generation into dairy farming, by combining it with recent technological developments in the energy sector.",
        "This project will result in more energy efficient dairy farms, stemming from advances in Artificial Intelligence that have not yet been applied to the dairy farming industry.",
        "The focus is on optimizing energy usage and renewable energy integration in agricultural settings.",
        "AI algorithms are used to predict energy demands and optimize renewable energy generation and storage.",
      ],
      images: [
        {
          src: "/images/images-previous/EIRE_AIAI_WebsiteImg.png",
          alt: "Science Foundation Ireland Logo",
          caption: "SFI Funding",
        },
      ],
      technologies: [
        "Artificial Intelligence",
        "Renewable Energy",
        "Agriculture",
        "Energy Optimization",
      ],
      funding: "Research Ireland",
      status: "Ongoing",
    },
    {
      id: "evomors",
      title: "Evolving Multi-Objective Robot Swarms EvoMORS",
      subtitle: "Multi-Objective Evolutionary Methods for Swarm Robotics",
      description:
        "This project focuses on using multi-objective evolutionary methods to develop controllers for swarm robotics.",
      details: [
        "This is important as there are often multiple conflicting objectives present in robotic tasks, e.g. speed and accuracy.",
        "This research was funded by the Royal Irish Academy and was conducted in collaboration with the Bristol Robotics Laboratory, UK.",
        "The project explores how evolutionary algorithms can optimize multiple objectives simultaneously in swarm robotics applications.",
        "Research focuses on developing robust controllers that can handle conflicting objectives in dynamic environments.",
      ],
      images: [
        {
          src: "/images/images-previous/ria-black.png",
          alt: "RIA Research Project",
          caption: "RIA Funding",
        },
        {
          src: "/images/projects/evoMORSWebsiteContent.mp4",
          alt: "Robotic Swarm Simulation",
          caption: "Swarm Simulation",
        },
      ],
      technologies: [
        "Multi-Objective Evolution",
        "Swarm Robotics",
        "Evolutionary Algorithms",
        "Robotic Control",
      ],
      funding: "Royal Irish Academy",
      status: "Completed",
      collaboration: "Bristol Robotics Laboratory, UK",
    },
    {
      id: "agent-based-energy",
      title:
        "Agent Based Modelling for Decision Making in the GB Energy Sector",
      subtitle: "Strategic Interactions in Energy Systems",
      description:
        "This project focuses on using agent based modelling to study the strategic interactions between decision makers within the GB energy sector.",
      details: [
        "There are multiple decision makers that influence the dynamics of energy systems, including: policy makers, energy generation companies and consumers.",
        "Understanding how these stakeholders interact with one another is key to understanding how the energy sector will evolve into the future.",
        "The project models complex interactions between different stakeholders in the energy market.",
        "Agent-based modeling helps predict how policy changes and market dynamics affect energy system evolution.",
      ],
      images: [
        {
          src: "/images/images-previous/exampledemandmapgb.png",
          alt: "Demand Mapping Research",
          caption: "GB Energy Demand Mapping",
        },
      ],
      technologies: [
        "Agent-Based Modeling",
        "Energy Systems",
        "Decision Making",
        "Strategic Interactions",
      ],
      funding: "Research Ireland",
      status: "Completed",
    },
    {
      id: "smart-buildings",
      title: "Reinforcement Learning for Smart Buildings",
      subtitle: "Autonomous Building Energy Management",
      description:
        "The area of building energy management has received a significant amount of interest in recent years.",
      details: [
        "This area is concerned with combining advancements in sensor technologies, communications and advanced control algorithms to optimize energy utilization.",
        "Reinforcement learning is one of the most prominent machine learning algorithms used for control problems and has had many successful applications in the area of building energy management.",
        "This project gives a comprehensive review of the literature relating to the application of reinforcement learning to developing autonomous building energy management systems and also focuses on developing new building energy management control algorithms.",
        "The research aims to create intelligent systems that can automatically optimize building energy consumption based on real-time data.",
      ],
      images: [
        {
          src: "/images/images-previous/RL_SmartBuildings.png",
          alt: "Smart Home Technology Research",
          caption: "Smart Building Technology",
        },
      ],
      technologies: [
        "Reinforcement Learning",
        "Smart Buildings",
        "Energy Management",
        "IoT Sensors",
      ],
      funding: "Research Ireland",
      status: "Completed",
    },
    {
      id: "solar-energy",
      title: "Deep Learning and Solar Energy",
      subtitle: "Machine Learning for Solar Energy Applications",
      description:
        "I have conducted research relating to the application of Machine Learning methods such as convolutional neural networks to problems relating to solar energy.",
      details: [
        "There is an ever increasing number of solar panels installed each year.",
        "There are a number of challenges associated with PV installation, including: merging solar into distribution feeders, estimating solar power production, etc.",
        "This project utilizes machine learning to address these challenges.",
        "This research was conducted in collaboration with Sandia National Laboratories.",
        "The project focuses on developing accurate models for solar power prediction and grid integration.",
      ],
      images: [
        {
          src: "/images/images-previous/deepLearningSolarPVWebsiteImg.png",
          alt: "Solar Panel Research",
          caption: "Solar Energy Research",
        },
      ],
      technologies: [
        "Deep Learning",
        "Convolutional Neural Networks",
        "Solar Energy",
        "Power Prediction",
      ],
      funding: "Research Ireland",
      status: "Completed",
      collaboration: "Sandia National Laboratories",
    },
  ],
};

const publications = {
  label: "Publications",
  title: "Selected Publications",
  description: ``,
  googleScholarUrl:
    "https://scholar.google.com/citations?hl=en&view_op=list_works&authuser=1&gmla=AJsN-F6U7RFLJVHk_P6J5rJc-yn5wDYFsRd_gXE14cgpNx1X2K3l2k1XHHlz8KKiyr6fURN84i0LyCucixsemWSmVCbAiFhSSA&user=kxcJG50AAAAJ",
  publications: [
    {
      title: "Demonstration Guided Multi-Objective Reinforcement Learning",
      authors: "Lu, J., Mannion, P. and Mason, K.",
      year: "2024",
      journal: "Transactions on Machine Learning Research",
      doi: "",
      abstract:
        "This paper presents a novel approach to multi-objective reinforcement learning using demonstration guidance.",
    },
    {
      title: "Evolving Neural Networks for Robotic Arm Control",
      authors: "Horgan, A., and Mason, K.",
      year: "2023",
      journal:
        "Applications of Evolutionary Computation: 26th International Conference, EvoApplications 2023",
      publisher: "Springer International Publishing",
      doi: "",
      abstract:
        "Research on evolutionary algorithms for neural network optimization in robotic control systems.",
    },
    {
      title:
        "Know Your Enemy: Identifying Adversarial Behaviours in Deep Reinforcement Learning Agents",
      authors: "Curley, S., Mason, K. and Mannion, P.",
      year: "2023",
      journal:
        "Proceedings of the 37th AAAI Conference on Artificial Intelligence (AAAI-23)",
      doi: "",
      abstract:
        "Investigation into detecting and understanding adversarial behaviors in deep reinforcement learning systems.",
    },
    {
      title:
        "Investing in generation and storage capacity in a liberalised electricity market: An agent based approach",
      authors: "Mason, K., Qadrdan, M. and Jenkins, N.",
      year: "2021",
      journal: "Applied Energy",
      volume: "294",
      pages: "116905",
      doi: "",
      abstract:
        "Agent-based modeling approach for investment decisions in electricity generation and storage capacity.",
    },
    {
      title:
        "A deep neural network approach for behind-the-meter residential PV size, tilt and azimuth estimation",
      authors:
        "Mason, K., Reno, M.J., Blakely, L., Vejdan, S. and Grijalva, S.",
      year: "2020",
      journal: "Solar Energy",
      volume: "196",
      pages: "260-269",
      doi: "",
      abstract:
        "Deep learning methods for estimating residential photovoltaic system parameters.",
    },
    {
      title:
        "A multi-objective neural network trained with differential evolution for dynamic economic emission dispatch",
      authors: "Mason, K., Duggan, J. and Howley, E.",
      year: "2018",
      journal: "International Journal of Electrical Power & Energy Systems",
      volume: "100",
      pages: "201-221",
      doi: "",
      abstract:
        "Multi-objective optimization using neural networks and differential evolution for power system dispatch.",
    },
  ],
};

export {
  person,
  social,
  home,
  work,
  publications,
  team,
  news,
};