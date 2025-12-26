import React from 'react';
import { Heart, Globe, Database, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('service_ict4d_title'),
      description: t('service_ict4d_desc'),
      fullDescription: 'Nous concevons et développons des systèmes numériques spécialement adaptés au secteur de la santé, en utilisant les technologies de l\'information et de la communication pour améliorer l\'accès aux soins et la qualité des services de santé.',
      icon: Heart,
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      borderColor: 'border-red-200 dark:border-red-800',
      features: [
        'Systèmes de gestion hospitalière',
        'Plateformes de télémédecine',
        'Outils de suivi épidémiologique',
        'Solutions de santé mobile (mHealth)',
      ],
    },
    {
      title: t('service_digital_title'),
      description: t('service_digital_desc'),
      fullDescription: 'Nous développons votre stratégie digitale et renforçons votre présence en ligne à travers des solutions web modernes, des campagnes de communication ciblées et une optimisation de votre visibilité numérique.',
      icon: Globe,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      features: [
        'Développement de sites web',
        'Stratégie de médias sociaux',
        'Marketing digital',
        'Optimisation SEO/SEA',
      ],
    },
    {
      title: t('service_digitalization_title'),
      description: t('service_digitalization_desc'),
      fullDescription: 'Nous accompagnons votre organisation dans sa transformation numérique en implémentant des solutions ERP personnalisées et en digitalisant vos processus métier pour améliorer votre efficacité opérationnelle.',
      icon: Database,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      features: [
        'Implémentation ERP',
        'Automatisation des processus',
        'Gestion documentaire',
        'Business Intelligence',
      ],
    },
    {
      title: t('service_consulting_title'),
      description: t('service_consulting_desc'),
      fullDescription: 'Notre équipe d\'experts vous accompagne à chaque étape de votre projet digital à travers des études approfondies, des audits techniques, des formations personnalisées et un support technique continu.',
      icon: Users,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      features: [
        'Audits techniques',
        'Études de faisabilité',
        'Formation et capacitation',
        'Support et maintenance',
      ],
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Analyse des besoins',
      description: 'Nous analysons vos besoins spécifiques et votre contexte opérationnel.',
    },
    {
      step: '02',
      title: 'Conception sur mesure',
      description: 'Nous concevons une solution personnalisée adaptée à vos objectifs.',
    },
    {
      step: '03',
      title: 'Développement & Test',
      description: 'Nous développons et testons rigoureusement votre solution.',
    },
    {
      step: '04',
      title: 'Déploiement & Support',
      description: 'Nous déployons la solution et assurons un support continu.',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t('services_title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('services_subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${service.borderColor}`}
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.fullDescription}
                    </p>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className={`h-5 w-5 ${service.color} flex-shrink-0`} />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Notre Processus de Travail
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Une approche méthodique et éprouvée pour garantir le succès de votre projet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:bg-blue-700 transition-colors duration-300 group-hover:scale-110 transform">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {process.description}
                </p>
                
                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full">
                    <div className="w-full h-0.5 bg-blue-200 dark:bg-blue-800"></div>
                    <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à transformer votre organisation ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous accompagner.
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

export default Services;