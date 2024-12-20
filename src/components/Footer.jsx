import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, MapPin, Phone, Mail, ChefHat } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* À propos */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">Saveurs d’À Côté</span>
            </div>
            <p className="text-gray-400 mb-6">
              Connectez-vous avec des passionnés de cuisine près de chez vous et découvrez des plats faits maison authentiques.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">123 Rue de la Cuisine, Paris</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">01 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">contact@cuisineconnect.fr</span>
              </div>
            </div>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liens utiles</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-500">À propos de nous</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Comment ça marche</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Nos chefs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Menu</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Blog culinaire</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Événements</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Centre d'aide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Politique de confidentialité</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Conditions d'utilisation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Mentions légales</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Inscrivez-vous pour recevoir nos dernières actualités et offres spéciales.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500"
              />
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition duration-200">
                S'inscrire
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} Saveurs d’À Côté. Tous droits réservés.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-orange-500">Confidentialité</a>
                <a href="#" className="hover:text-orange-500">Conditions</a>
                <a href="#" className="hover:text-orange-500">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;