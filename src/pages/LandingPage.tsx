import React from 'react';
import { ChefHat, Utensils, Heart, Users, ArrowRight, Star, MapPin } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function LandingPage() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2070"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            La cuisine de quartier
            <span className="block text-orange-400">réinventée</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Connectez-vous avec des passionnés de cuisine près de chez vous et découvrez des plats faits maison authentiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="primary"
              icon={ArrowRight}
              iconPosition="right"
              className="bg-orange-500 hover:bg-orange-600"
              onClick={() => window.location.href = '/app'}
            >
              Découvrir la plateforme
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection('how-it-works')}
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comment ça marche ?</h2>
            <p className="text-xl text-gray-600">Une expérience simple et intuitive</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: MapPin,
                title: "Trouvez",
                description: "Découvrez des cuisiniers passionnés dans votre quartier"
              },
              {
                icon: Utensils,
                title: "Commandez",
                description: "Choisissez parmi une variété de plats faits maison"
              },
              {
                icon: Heart,
                title: "Savourez",
                description: "Profitez de délicieux repas et créez des liens"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
                  <step.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?auto=format&fit=crop&q=80&w=1074"
                alt="Chef cooking"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Pourquoi choisir CuisineConnect ?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: ChefHat,
                    title: "Cuisiniers vérifiés",
                    description: "Tous nos cuisiniers sont soigneusement sélectionnés et vérifiés"
                  },
                  {
                    icon: Heart,
                    title: "Plats authentiques",
                    description: "Des recettes traditionnelles préparées avec amour"
                  },
                  {
                    icon: Users,
                    title: "Communauté locale",
                    description: "Créez des liens avec vos voisins passionnés de cuisine"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-orange-100">
                        <feature.icon className="h-6 w-6 text-orange-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNCAtMTQgMTQgNi4yNjggMTQgMTQtNi4yNjggMTQtMTQgMTR6IiBmaWxsPSIjZmI5MjNjIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-50"></div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">Newsletter</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Rejoignez l'aventure CuisineConnect
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Soyez les premiers à découvrir nos nouvelles fonctionnalités, recevoir des recettes exclusives et des conseils de nos chefs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl bg-opacity-90 transform hover:scale-[1.02] transition-all duration-300">
            <form className="space-y-6">
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Votre adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="chef@cuisineconnect.fr"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm transition-all duration-200"
                  required
                />
              </div>
              
              <div className="flex items-start bg-orange-50 p-4 rounded-lg">
                <input
                  type="checkbox"
                  id="updates"
                  name="updates"
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <label htmlFor="updates" className="ml-3 text-sm text-gray-600">
                  Je souhaite recevoir des inspirations culinaires et être informé(e) des nouveautés
                </label>
              </div>

              <Button
                type="submit"
                variant="primary"
                fullWidth
                size="lg"
                className="mt-6 transform hover:translate-y-[-2px] transition-all duration-200"
              >
                Rejoindre la communauté
              </Button>
            </form>

            <p className="mt-6 text-sm text-gray-500 text-center">
              🔒 Vos données sont sécurisées. Désabonnement facile en un clic.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Prêt à rejoindre l'aventure ?
          </h2>
          <p className="text-xl text-orange-100 mb-12">
            Rejoignez notre communauté de passionnés de cuisine et découvrez une nouvelle façon de partager votre amour pour la cuisine.
          </p>
          <Button
            size="lg"
            variant="secondary"
            icon={ArrowRight}
            iconPosition="right"
            onClick={() => window.location.href = '/app'}
            className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            Commencer maintenant
          </Button>
        </div>
      </section>
    </div>
  );
}