import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Menu, X, ChefHat, Search, ShoppingCart, User } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">

      {/* Navigation principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-orange-500" />
            <a href="/" className="text-2xl font-bold text-gray-900">
            Saveurs<span className="text-orange-500"> d’À Côté</span>
            </a>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-orange-600">
              Comment ça marche
            </a>
            <a href="#features" className="text-gray-600 hover:text-orange-600">
              Nos chefs
            </a>
            <a href="#menu" className="text-gray-600 hover:text-orange-600">
              Menu
            </a>
            <div className="flex items-center space-x-4">
              <Button
                variant="primary"
                className="bg-orange-500 hover:bg-orange-600"
                onClick={() => window.open('./app', '_blank')}
              >
                Accéder à l'app
              </Button>
            </div>
          </nav>

          {/* Menu burger - Mobile */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300"
            />
          </div>
          <nav className="px-4 py-2 space-y-2">
            <a href="#" className="block py-2 text-gray-600">Comment ça marche</a>
            <a href="#" className="block py-2 text-gray-600">Nos chefs</a>
            <a href="#" className="block py-2 text-gray-600">Menu</a>
            <a href="#" className="block py-2 text-gray-600">Blog</a>
            <a href="#" className="block py-2 text-gray-600">FAQ</a>
            <a href="#" className="block py-2 text-gray-600">Contact</a>
            <Button
              variant="primary"
              className="w-full bg-orange-500 hover:bg-orange-600 mt-4"
              onClick={() => window.open('https://landing-page-one-flame.vercel.app', '_blank')}
            >
              Accéder à l'app
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;