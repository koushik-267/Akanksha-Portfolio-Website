import {
  Facebook,
  Instagram,
  X,
  Mail,
  Phone,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-950 dark:text-gray-100 pt-16 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-3 shrink-0"
              aria-label="Akanksha Publications home"
            >
              <img
                src="/logo-akanksha.png"
                alt="Akanksha Publications logo"
                className="h-14 w-14 object-contain"
              />
              <span className="font-bold text-xl text-gray-400 dark:text-gray-300 mb-4">
                Akanksha Publications
              </span>
            </Link>
            <p className="text-gray-400 dark:text-gray-300 mb-4">
              Akanksha Publications is committed to providing
              quality educational resources that inspire
              learning and academic excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61585519104439"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/akankshapublications/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://x.com/AkankshaPbl6777"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <X size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-300">
              <li>
                <Link
                  to="/"
                  className="hover:text-amber-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-amber-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/publications"
                  className="hover:text-amber-500 transition-colors"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="hover:text-amber-500 transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-amber-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>[+91 9550-616777]</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>support@akankshapublications.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-900 pt-8">
          <div className="text-center text-gray-400 dark:text-gray-300">
            <p>
              &copy; {currentYear} Akanksha Publications. All
              rights reserved.
            </p>
            <p className="mt-2 text-sm">
              Designed with passion for education excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}