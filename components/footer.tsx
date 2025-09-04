import Link from "next/link"
import { Twitter, MessageCircle, Send, Linkedin } from "lucide-react"
import Image from "next/image"
import { StoreButtons } from "@/components/store-buttons"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/logo-datafuel.png" alt="DataFuel Logo" width={32} height={32} className="w-8 h-8" />
              <span className="font-playfair font-bold text-xl text-foreground">DataFuel</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              DataFuel est une plateforme Web3 qui récompense les utilisateurs avec le token $DFL pour le partage
              sécurisé de leurs données personnelles.
            </p>
          <div className="mt-4"><StoreButtons /></div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/whitepaper"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link
                  href="/tokenomics"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Communauté</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Send className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">© 2024 DataFuel. Tous droits réservés. | contact@datafuel.io</p>
        </div>
      </div>
    </footer>
  )
}
