import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    nav_home: 'Accueil',
    nav_about: 'À propos',
    nav_services: 'Nos Services',
    nav_solutions: 'Solutions',
    nav_realizations: 'Réalisations',
    nav_contact: 'Contact',
    
    // Home Page
    hero_title: 'Bienvenue chez Himaya Business Sarl',
    hero_slogan: 'Safety and Rapidity',
    hero_cta: 'Nous contacter',
    
    about_preview_title: 'À PROPOS DE NOUS – Experts en Solutions Numériques pour le Développement',
    about_preview_text: 'Forts de notre expérience dans les Technologies de l\'Information et de la Communication au service du développement, nous mettons notre passion pour la transformation numérique au service des organisations, des systèmes et des gouvernements.',
    learn_more: 'En savoir plus',
    
    magala_title: 'MAGALA – LA SANTÉ À LA PORTÉE DE MAIN',
    magala_description: 'Magala est notre solution de télémédecine innovante qui révolutionne l\'accès aux soins de santé. Avec des consultations vidéo, des paiements intégrés, des e-prescriptions et la gestion de l\'historique médical, Magala rend la santé accessible à tous.',
    discover_magala: 'Découvrir Magala',
    
    what_we_do_title: 'Des Solutions Numériques Pour Un Développement Inclusif',
    service_ict4d_title: 'ICT4D',
    service_ict4d_desc: 'Conception de systèmes numériques pour la santé',
    service_digital_title: 'Communication numérique',
    service_digital_desc: 'Stratégie digitale & présence en ligne',
    service_digitalization_title: 'Digitalisation',
    service_digitalization_desc: 'ERP & gestion numérique',
    service_consulting_title: 'Conseil & accompagnement',
    service_consulting_desc: 'Études, audits, formation, assistance',
    
    opensource_title: 'SOLUTIONS OPEN SOURCE AU SERVICE DU DÉVELOPPEMENT',
    opensource_desc: 'Nous personnalisons et déployons des solutions open source reconnues pour accélérer votre transformation digitale.',
    
    values_title: 'Nos Engagements',
    value_local: 'Appropriation locale',
    value_impact: 'Impact réel',
    value_transparency: 'Transparence & éthique',
    value_innovation: 'Innovation responsable',
    
    // Footer
    footer_motto: 'Accélérer la transformation digitale pour un développement inclusif et durable.',
    quick_links: 'Liens rapides',
    contact_info: 'Informations de contact',
    
    // About Page
    about_title: 'À propos de Himaya Business Sarl',
    mission_title: 'Notre Mission',
    mission_text: 'Notre mission est de démocratiser l\'accès aux technologies numériques en Afrique et d\'accompagner les organisations dans leur transformation digitale pour un développement durable et inclusif.',
    team_title: 'Notre Équipe',
    
    // Services Page
    services_title: 'Nos Services',
    services_subtitle: 'Des solutions sur mesure pour votre transformation digitale',
    
    // Solutions Page
    solutions_title: 'Nos Solutions',
    solutions_subtitle: 'Solutions open source personnalisées et déployées par HiB\'s',
    
    // Realizations Page
    realizations_title: 'Nos Réalisations',
    realizations_placeholder: 'Page en cours de traitement – images et projets seront ajoutés bientôt.',
    
    // Contact Page
    contact_title: 'Contactez-nous',
    contact_subtitle: 'Parlons de votre projet de transformation digitale',
    form_name: 'Nom complet',
    form_email: 'Email',
    form_subject: 'Sujet',
    form_message: 'Message',
    form_submit: 'Envoyer le message',
  },
  en: {
    // Navigation
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Our Services',
    nav_solutions: 'Solutions',
    nav_realizations: 'Realizations',
    nav_contact: 'Contact',
    
    // Home Page
    hero_title: 'Welcome to Himaya Business Sarl',
    hero_slogan: 'Safety and Rapidity',
    hero_cta: 'Contact us',
    
    about_preview_title: 'ABOUT US – Experts in Digital Solutions for Development',
    about_preview_text: 'With our experience in Information and Communication Technologies for development, we put our passion for digital transformation at the service of organizations, systems and governments.',
    learn_more: 'Learn more',
    
    magala_title: 'MAGALA – HEALTHCARE AT YOUR FINGERTIPS',
    magala_description: 'Magala is our innovative telemedicine solution that revolutionizes access to healthcare. With video consultations, integrated payments, e-prescriptions and medical history management, Magala makes healthcare accessible to all.',
    discover_magala: 'Discover Magala',
    
    what_we_do_title: 'Digital Solutions For Inclusive Development',
    service_ict4d_title: 'ICT4D',
    service_ict4d_desc: 'Design of digital systems for health',
    service_digital_title: 'Digital communication',
    service_digital_desc: 'Digital strategy & online presence',
    service_digitalization_title: 'Digitalization',
    service_digitalization_desc: 'ERP & digital management',
    service_consulting_title: 'Consulting & support',
    service_consulting_desc: 'Studies, audits, training, assistance',
    
    opensource_title: 'OPEN SOURCE SOLUTIONS FOR DEVELOPMENT',
    opensource_desc: 'We customize and deploy recognized open source solutions to accelerate your digital transformation.',
    
    values_title: 'Our Commitments',
    value_local: 'Local ownership',
    value_impact: 'Real impact',
    value_transparency: 'Transparency & ethics',
    value_innovation: 'Responsible innovation',
    
    // Footer
    footer_motto: 'Accelerating digital transformation for inclusive and sustainable development.',
    quick_links: 'Quick links',
    contact_info: 'Contact information',
    
    // About Page
    about_title: 'About Himaya Business Sarl',
    mission_title: 'Our Mission',
    mission_text: 'Our mission is to democratize access to digital technologies in Africa and support organizations in their digital transformation for sustainable and inclusive development.',
    team_title: 'Our Team',
    
    // Services Page
    services_title: 'Our Services',
    services_subtitle: 'Tailored solutions for your digital transformation',
    
    // Solutions Page
    solutions_title: 'Our Solutions',
    solutions_subtitle: 'Open source solutions customized and deployed by HiB\'s',
    
    // Realizations Page
    realizations_title: 'Our Realizations',
    realizations_placeholder: 'Page under development – images and projects will be added soon.',
    
    // Contact Page
    contact_title: 'Contact Us',
    contact_subtitle: 'Let\'s talk about your digital transformation project',
    form_name: 'Full name',
    form_email: 'Email',
    form_subject: 'Subject',
    form_message: 'Message',
    form_submit: 'Send message',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  useEffect(() => {
    const saved = localStorage.getItem('hibs-language') as 'fr' | 'en';
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: 'fr' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('hibs-language', lang);
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};