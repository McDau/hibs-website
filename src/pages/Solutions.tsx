import React from 'react';
import { Heart, Database, BarChart3, Settings, Users, Shield, ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Solutions = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      name: 'OpenClinic GA',
      description: 'Système de gestion hospitalière open source complet pour la gestion des patients, des consultations et de l\'administration hospitalière.',
      icon: Heart,
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      features: ['Gestion des patients', 'Dossiers médicaux', 'Facturation', 'Pharmacie'],
      category: 'Santé',
    },
    {
      name: 'OpenMRS',
      description: 'Plateforme de dossiers médicaux électroniques conçue pour les pays en développement avec un système modulaire flexible.',
      icon: Database,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      features: ['EMR/EHR', 'Modules personnalisés', 'API REST', 'Intégrations'],
      category: 'Santé',
    },
    {
      name: 'DHIS2',
      description: 'Système d\'information sanitaire pour la collecte, validation, analyse et présentation de données statistiques agrégées.',
      icon: BarChart3,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      features: ['Collecte de données', 'Tableaux de bord', 'Indicateurs', 'Cartographie'],
      category: 'Santé',
    },
    {
      name: 'ERPNext',
      description: 'Suite ERP complète et moderne pour la gestion d\'entreprise incluant comptabilité, RH, CRM et gestion de stock.',
      icon: Settings,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      features: ['Comptabilité', 'RH', 'CRM', 'Inventaire'],
      category: 'Gestion',
    },
    {
      name: 'Superset',
      description: 'Plateforme de visualisation de données moderne et intuitive pour créer des tableaux de bord interactifs.',
      icon: BarChart3,
      color: 'text-teal-500',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
      features: ['Visualisations', 'Tableaux de bord', 'SQL Lab', 'Alertes'],
      category: 'Analytics',
    },
    {
      name: 'Looker Studio',
      description: 'Outil de reporting et de visualisation de données de Google pour créer des rapports interactifs et collaboratifs.',
      icon: BarChart3,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      features: ['Rapports dynamiques', 'Connecteurs', 'Collaboration', 'Temps réel'],
      category: 'Analytics',
    },
  ];

  const magalaFeatures = [
    'Consultations vidéo sécurisées',
    'Système de paiement intégré',
    'E-prescriptions numériques',
    'Historique médical centralisé',
    'Interface patient/médecin intuitive',
    'Notifications et rappels automatiques',
  ];

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t('solutions_title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('solutions_subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Magala - Featured Solution */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-2">MAGALA</h2>
                  <p className="text-teal-100">Solution de Télémédecine</p>
                </div>
              </div>
              
              <p className="text-lg mb-8 leading-relaxed text-teal-50">
                {t('magala_description')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {magalaFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-200 rounded-full"></div>
                    <span className="text-teal-50">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 group">
                {t('discover_magala')}
                <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/20 rounded-lg">
                      <span>Consultations actives</span>
                      <span className="font-bold">1,247</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/20 rounded-lg">
                      <span>Médecins connectés</span>
                      <span className="font-bold">89</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/20 rounded-lg">
                      <span>Patients inscrits</span>
                      <span className="font-bold">15,692</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Solutions Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Solutions Open Source
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nous personnalisons et déployons des solutions open source reconnues mondialement 
              pour accélérer votre transformation digitale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${solution.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className={`h-6 w-6 ${solution.color}`} />
                  </div>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full">
                    {solution.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {solution.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 group">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OpenAssu Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                  OpenAssu
                </h2>
                <p className="text-orange-600 dark:text-orange-400 font-medium">En développement</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Notre prochaine solution révolutionnaire pour la digitalisation du secteur des assurances. 
              OpenAssu permettra une gestion complète des polices, sinistres et clients avec une interface moderne et intuitive.
            </p>
            
            <div className="inline-flex items-center px-6 py-3 bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200 rounded-lg">
              <Settings className="h-5 w-5 mr-2 animate-spin" />
              Bientôt disponible
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Besoin d'une solution personnalisée ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Nos experts peuvent adapter ces solutions à vos besoins spécifiques 
            ou développer une solution entièrement personnalisée.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 group">
            {t('hero_cta')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;