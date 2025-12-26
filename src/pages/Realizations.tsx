import { HeartPulse, Building2, LayoutDashboard, ShieldCheck } from 'lucide-react';


const Realizations = () => {
  

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300 pt-16">

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Nos Réalisations
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Des solutions numériques concrètes au service de la santé, des institutions publiques
            et de la transformation digitale en Afrique.
          </p>
        </div>
      </section>

      {/* Réalisations */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2">

          {/* iSika Santé */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
            <div className="flex items-center mb-4 space-x-3">
              <HeartPulse className="h-8 w-8 text-red-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                iSika Santé
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              iSika Santé est une application de conseil et d’orientation en santé destinée au grand public.
              Elle permet aux populations d’accéder à des informations de santé fiables, validées,
              et adaptées au contexte local.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              La prochaine version intégrera des fonctionnalités avancées de télémédecine,
              notamment la téléconsultation médicale, renforçant ainsi l’accès équitable aux soins.
            </p>
          </div>

          {/* ERPNext – SG Santé */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
            <div className="flex items-center mb-4 space-x-3">
              <ShieldCheck className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                ERPNext – Secrétariat Général à la Santé (RDC)
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              HiBs a contribué au déploiement de la solution ERPNext au sein du bureau du
              Secrétaire Général à la Santé Publique de la République Démocratique du Congo.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Cette solution permet de digitaliser les processus administratifs,
              améliorer la gestion des ressources et renforcer la gouvernance institutionnelle.
            </p>
          </div>

          {/* OpenMRS & OpenClinic */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
            <div className="flex items-center mb-4 space-x-3">
              <Building2 className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                OpenMRS & OpenClinic GA
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Déploiement et accompagnement de systèmes d’information hospitaliers open source
              (OpenMRS et OpenClinic GA) dans plusieurs établissements de santé.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Ces solutions permettent une meilleure gestion des dossiers médicaux,
              des flux de patients et des données cliniques pour la prise de décision.
            </p>
          </div>

          {/* Conseil & Data */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-purple-500">
            <div className="flex items-center mb-4 space-x-3">
              <LayoutDashboard className="h-8 w-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Conseil stratégique & Tableaux de bord
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              HiBs accompagne les organisations publiques et privées dans leur transformation digitale,
              à travers des conseils stratégiques, des audits techniques et l’architecture des systèmes.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Nous concevons et déployons également des tableaux de bord décisionnels
              pour améliorer le pilotage, la performance et la transparence.
            </p>
          </div>

        </div>
      </section>

      {/* Engagement */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Notre approche
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Chaque réalisation de HiBs repose sur une compréhension fine du contexte local,
            une expertise technique éprouvée et une vision orientée impact, durabilité et innovation responsable.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Realizations;
