import React from 'react';

export const projectsData = {
  fr: {
    p4: {
      id: "p4",
      title: "Il s'appelait Eun-Woo",
      subtitle: "Jeu Vidéo / Aventure Narrative",
      date: "développé du 29 janv. au 1er fév. 2026",
      desc: (
        <span>
          Ce jeu vidéo a été créé dans le cadre de la <a href="https://globalgamejam.org/" target="_blank" rel="noopener noreferrer" className="text-[#00CCFF] hover:underline">Global Game Jam</a> 2026. "Il s'appelait Eun-Woo" est une expérience narrative développée sous Unity. Fruit d'une collaboration au sein d'une équipe de développeurs professionnels, ce projet explore des mécaniques immersives et une narration soignée.
        </span>
      ),
      stackTitle: "Stack Technologique",
      stack: [
        "Moteur : Unity 6",
        "Langage : C# (Scripting Orienté Objet)",
        "Équipe : Collaboration avec des développeurs professionnels",
        "Gestion : Git & GitHub pour le versioning"
      ],
      featTitle: "Fonctionnalités Phares",
      features: [
          "Narration immersive",
          "Gameplay narratif",
          "Atmosphère sonore dédiée",
          "Direction artistique originale"
      ],
      btnDemo: "Jouer",
      linkDemo: "https://globalgamejam.org/games/2026/il-sappelait-eun-woo-7",
      btnRepo: "Accéder au code source"
    },
    p1: {
      id: "p1",
      title: "District Zone 25",
      subtitle: "Plateforme communautaire",
      date: "en développement depuis déc. 2025",
      desc: (
        <span>
          Né de l’effervescence créative de la <a href="https://www.nuitdelinfo.com/" target="_blank" rel="noopener noreferrer" className="text-[#00CCFF] hover:underline">Nuit de l'Info</a> 2025, District Zone 25 est une plateforme communautaire interactive conçue pour briser les silos entre le grand public et les experts de la technologie. Développée avec React, cette application devient un carrefour d’innovation où étudiants, professionnels et néophytes passionnés convergent. En facilitant le partage de projets novateurs et la confrontation d'idées, District Zone 25 agit comme un catalyseur d'opportunités et de partenariats stratégiques pour les acteurs de l'informatique de demain.
        </span>
      ),
      stackTitle: "Stack Technologique",
      stack: [
        "Front-end : React.js (Hooks, Router), JavaScript (ES6+), CSS3",
        "Back-end : Supabase (Authentification sécurisée & Base de données en temps réel)",
        "Intelligence Artificielle : Google Gemini AI, intégré comme \"cerveau cognitif\" pour l'assistance en temps réel",
        "Architecture & Design : Architecture modulaire orientée composants & Responsive Design",
        "Écosystème de développement : VS Code, Git et GitHub",
        "Déploiement : Vercel (Intégration et déploiement continus)"
      ],
      featTitle: "Fonctionnalités Phares",
      features: [
          "Assistant IA Intégré",
          "Espace Communautaire Temps Réel",
          "Architecture Robuste (Supabase)",
          "Expérience Fluide & Responsive"
      ],
      btnDemo: "Accéder à la plateforme",
      linkDemo: "https://rocks-project-frontend.vercel.app",
      btnRepo: "Accéder au dépôt Github"
    },
    p3: {
      id: "p3",
      title: "CyberSpace Neon Arcade 0.2",
      subtitle: "Jeu de Tir Arcade 2D (Shoot'em Up)",
      date: "développé en déc. 2025",
      desc: (
        <span>
          {/* MODIFICATION ICI : Ajout de " 2025" après le lien */}
          CyberSpace Neon Arcade 0.2 a été développé dans le cadre de la <a href="https://codegamejam.extragames.fr/" target="_blank" rel="noopener noreferrer" className="text-[#00CCFF] hover:underline">Code Game Jam</a> 2025. Conçu comme une exploration technique du développement vidéoludique moderne, CyberSpace Defender est un jeu de tir arcade (Shoot'em Up) développé sous Unity. Ce projet matérialise la rencontre entre l'esthétique rétro du Pixel Art et une logique de programmation rigoureuse en C#. En mettant l'accent sur l'expérience utilisateur (Game Feel) et l'algorithmique comportementale, l'application propose une boucle de gameplay dynamique où la gestion de la difficulté est indexée sur la performance du joueur. Plus qu'un simple jeu, c'est une démonstration de compétences en architecture logicielle orientée composants et en gestion de systèmes interactifs temps réel.
        </span>
      ),
      stackTitle: "Stack Technologique",
      stack: [
        "Moteur & Langage : Unity 6 (LTS), C# (Scripting Orienté Objet & MonoBehavior)",
        "Architecture Logique : Système modulaire basé sur les composants (Component-Based Architecture), Gestionnaire d'États (GameManager), Coroutines pour la gestion temporelle",
        "Systèmes Core Gameplay : Algorithme de Spawning procédural (Génération d'ennemis avec pondération de rareté), Logique de Combo conditionnelle",
        "Interface (UI/UX) : Unity UI, TextMeshPro, Canvas Scaler (Responsive Design adaptatif 1920x1080), Ancrages dynamiques",
        "Physique & Collisions : Rigidbody2D, BoxCollider2D, Gestion des Triggers",
        "Déploiement : Build Windows Standalone (.exe), Distribution via Itch.io"
      ],
      featTitle: "Fonctionnalités Phares",
      features: [
          "Système de Rangs Évolutif (Junior à Légende)",
          "Mécanique de Combo Tactique (Risk vs Reward)",
          "Gestion Procédurale des Menaces & Bonus",
          "Architecture Sonore & Visuelle (Parallax Scrolling)",
          "Cycle de Jeu Complet (Menu, Pause, GameOver)"
      ],
      btnDemo: "Jouer sur Itch.io",
      linkDemo: "https://rockssan.itch.io/cyberspace",
      btnRepo: "Accéder au code source"
    },
    p2: {
      id: "p2",
      title: "Assistant Services Publics",
      subtitle: "Guide Administratif Intelligent",
      date: "développé en déc. 2025",
      desc: (
        <span>
          {/* MODIFICATION ICI : Remplacement de "défi NDI 2025" par le lien "Nuit de l'Info" + " 2025" */}
          Développé dans le cadre de la <a href="https://www.nuitdelinfo.com/" target="_blank" rel="noopener noreferrer" className="text-[#00CCFF] hover:underline">Nuit de l'Info</a> 2025, cet assistant intelligent a pour vocation de simplifier et démocratiser l'accès à l'information administrative. Grâce à l'intégration de Gemini AI pour vulgariser les démarches et une conception technique inclusive (bilingue FR/AR, mode hors-ligne), il offre une ressource précieuse et accessible à tous les usagers, même en zones à faible connectivité.
        </span>
      ),
      stackTitle: "Stack Technologique",
      stack: [
        "Front-end : React.js (Architecture légère pour un chargement rapide)",
        "Intelligence Artificielle : Gemini AI (Optimisée pour des réponses structurées et concises)",
        "Gestion de l'Accessibilité : i18next (Support bilingue dynamique Français / Arabe)",
        "Mode Offline & Performance : Utilisation du Cache navigateur et des Web Storage API",
        "Design & UI : Tailwind CSS (Interface sobre, rapide et 100% responsive)",
        "Écosystème de développement : VS Code, Git et GitHub",
        "Hébergement : Vercel"
      ],
      featTitle: "Fonctionnalités Phares",
      features: [
          "Guide administratif intelligent via Gemini AI",
          "Mode hybride Online/Offline (LocalStorage)",
          "Interface bilingue native (FR/AR) avec support RTL",
          "Conception Low-Bandwidth pour réseaux instables",
          "Moteur d'orientation catégorisé",
          "Accessibilité universelle"
      ],
      btnDemo: "Accéder à l'assistant",
      linkDemo: "https://nuit-info-assist.vercel.app",
      btnRepo: "Accéder au dépôt Github"
    }
  },
  en: {
    // Version anglaise inchangée pour l'instant
  }
};