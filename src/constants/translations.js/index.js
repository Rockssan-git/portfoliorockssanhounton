import { projectsData } from './projects';
import { experienceData } from './experience';
import { skillsData } from './skills';

export const translations = {
  fr: {
    // --- IMPORTATIONS DYNAMIQUES ---
    projects: {
        title: "Projets Réalisés",
        ...projectsData.fr
    },
    experience: experienceData.fr,
    skills: skillsData.fr,

    // --- TEXTES STATIQUES ---
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      experience: 'Expériences',
      education: 'Formations',
      distinctions: 'Distinctions',
      projects: 'Projets',
      contact: 'Contacts',
      role: 'Ingénieur Aéro'
    },
    hero: {
      titlePart1: 'FUTUR INGÉNIEUR',
      titlePart2: 'AÉRONAUTIQUE',
      description: (
        <>
          Attiré par les technologies et leur évolution, je m’intéresse à la manière dont les systèmes se conçoivent, interagissent et se transforment. J’aime apprendre, expérimenter et contribuer à des projets technologiques porteurs de sens et d’impact.
        </>
      ),
      cvButton: 'Mon CV'
    },
    about: {
      quote: "« Courir derrière l’invention est souvent une course vaine vers l’inconnu, alors que l’innovation est une quête consciente vers la perfection ».",
      p1: "Ainsi se forge ma pensée sur le sens véritable de l’innovation.",
      p2: "L’invention cherche à créer ce qui n’existe pas encore ; l’innovation, elle, révèle le potentiel caché de ce qui existe déjà. L’une naît souvent du hasard, l’autre exige la rigueur, l’observation et la compréhension profonde des limites actuelles pour les transcender. J’ai toujours cru que la véritable intelligence ne réside pas dans la volonté de tout réinventer, mais dans la capacité d’extraire du réel son plus haut degré d’efficacité, de beauté et d’harmonie. Car rien, même dans nos plus grandes avancées technologiques, n’est jamais achevé. Tout reste perfectible ; et c’est dans cette zone subtile entre l’existant et le possible que s’écrit le vrai progrès.",
      p3: "C’est dans cet esprit que je porte un regard exigeant sur les domaines où la perfection semble déjà acquise, mais où tant de défis demeurent encore à relever : l’aéronautique et le spatial.",
      p4: "L’aéronautique et le spatial incarnent pour moi ce défi permanent : concilier performance, sécurité, et durabilité dans un environnement où chaque gramme, chaque degré, chaque décibel compte. Ce sont des domaines fascinants mais encore confrontés à des enjeux cruciaux : consommation énergétique élevée, empreinte carbone, bruit, fatigue des matériaux, turbulence atmosphérique, fiabilité des systèmes embarqués ou encore coûts d’exploitation et maintenance.",
      p5: "Mon ambition est claire : contribuer à la recherche et à l’innovation pour rendre l’aéronautique et le spatial toujours plus efficients, plus responsables, et pour rendre le transport aérien plus sûr.",
      p6: "Je crois profondément que le progrès n’est jamais une aventure solitaire. C’est dans la coopération, la synergie des talents et la curiosité partagée que naissent les vraies révolutions techniques. C’est cette conviction qui guide mon parcours, et qui nourrit ma détermination à évoluer dans ce secteur stratégique du développement mondial.",
      p7: "Toujours animé par cette passion, je reste ouvert à toute discussion, collaboration ou échange d’idées autour de ce domaine qui me fascine tant. Partager, apprendre et construire ensemble sont pour moi les véritables moteurs du progrès car chaque rencontre peut être le point de départ d’une innovation qui transforme le ciel."
    },
    education: {
      title: "Formations",
      edu1: {
        role: "Licence Sciences pour l'Ingénieur mention mécanique",
        school: "Université de Bordeaux • En cours",
        desc: ""
      },
      edu2: {
        role: "Licence 1 Pro Génie Électrique et Informatique mention Informatique et Télécom",
        school: "Université d'Abomey (UNSTIM) • 2024-2025",
        desc: ""
      }
    },
    achievements: {
      title: "Distinctions",
      card1: {
        title: 'Défi "Formulaire augmenté" (NDI 2025)',
        badge: "Leader",
        text: "Médaille d'argent avec le groupe"
      }
    },
    contact: {
      labelName: "Identité",
      placeName: "Votre Nom",
      labelEmail: "Canal de Réponse (Email)",
      placeEmail: "nom@exemple.com",
      labelMsg: "Transmission (Message)",
      placeMsg: "Initialisation de la communication...",
      btn: "Envoyer la Requête",
      accessLocked: "Pour des raisons de confidentialité, l'accès au code est sur demande. Remplissez ce formulaire pour recevoir l'accès.",
      prefillMsg: "Bonjour Rockssan,\n\nJe suis intéressé par le projet {project} et je souhaiterais avoir accès au code source sur GitHub.\n\nCordialement,"
    }
  },

  en: {
    // --- 1. DYNAMIC DATA (Imports EN) ---
    projects: {
        title: "Featured Projects",
        ...projectsData.en
    },
    experience: experienceData.en,
    skills: skillsData.en,

    // --- 2. STATIC TEXTS (EN) ---
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      distinctions: 'Awards',
      projects: 'Projects',
      contact: 'Contacts',
      role: 'Aero Engineer'
    },
    hero: {
      titlePart1: 'FUTURE AEROSPACE',
      titlePart2: 'ENGINEER',
      description: (
        <>
          Drawn to technologies and their evolution, I am interested in how systems are designed, interact, and transform. I thrive on learning, experimenting, and contributing to meaningful and impactful technological projects.
        </>
      ),
      cvButton: 'My Resume'
    },
    about: {
      quote: "“Chasing invention is often a vain race towards the unknown, whereas innovation is a conscious quest towards perfection.”",
      p1: "Thus is forged my thought on the true meaning of innovation.",
      p2: "Invention seeks to create what does not yet exist; innovation reveals the hidden potential of what already exists. One is often born of chance, the other requires rigor, observation, and a deep understanding of current limits to transcend them. I have always believed that true intelligence does not lie in the will to reinvent everything, but in the ability to extract from reality its highest degree of efficiency, beauty, and harmony. For nothing, even in our greatest technological advances, is ever finished. Everything remains perfectible; and it is in this subtle zone between the existing and the possible that true progress is written.",
      p3: "It is in this spirit that I look demandingly at fields where perfection seems already acquired, but where so many challenges remain to be met: aeronautics and space.",
      p4: "Aeronautics and space embody for me this permanent challenge: reconciling performance, safety, and durability in an environment where every gram, every degree, every decibel counts. These are fascinating fields but still confronted with crucial issues: high energy consumption, carbon footprint, noise, material fatigue, atmospheric turbulence, embedded systems reliability, or operating and maintenance costs.",
      p5: "My ambition is clear: to contribute to research and innovation to make aeronautics and space ever more efficient, more responsible, and to make air transport safer.",
      p6: "I deeply believe that progress is never a solitary adventure. It is in cooperation, the synergy of talents, and shared curiosity that true technical revolutions are born. It is this conviction that guides my path, and feeds my determination to evolve in this strategic sector of global development.",
      p7: "Still driven by this passion, I remain open to any discussion, collaboration, or exchange of ideas around this field that fascinates me so much. Sharing, learning, and building together are for me the true engines of progress because every encounter can be the starting point of an innovation that transforms the sky."
    },
    education: {
      title: "Education",
      edu1: {
        role: "Bachelor of Engineering Sciences, Mechanical Specialization",
        school: "University of Bordeaux • In progress",
        desc: ""
      },
      edu2: {
        role: "Professional Bachelor (Year 1) - Electrical & Computer Engineering, CS & Telecoms Specialization",
        school: "University of Abomey (UNSTIM) • 2024-2025",
        desc: ""
      }
    },
    achievements: {
      title: "Awards",
      card1: {
        title: '"Augmented Form" Challenge (NDI 2025)',
        badge: "Leader",
        text: "Silver medal with the group"
      }
    },
    contact: {
      labelName: "Identity",
      placeName: "Your Name",
      labelEmail: "Response Channel (Email)",
      placeEmail: "name@example.com",
      labelMsg: "Transmission (Message)",
      placeMsg: "Initializing communication...",
      btn: "Send Request",
      accessLocked: "For confidentiality reasons, access to code is upon request. Fill out this form to receive access.",
      prefillMsg: "Hello Rockssan,\n\nI am interested in the {project} project and I would like to request access to the GitHub repository.\n\nBest regards,"
    }
  }
};