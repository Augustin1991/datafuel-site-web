import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Wallet, Shield, Coins, Database, Users, Lock, Smartphone, BarChart3 } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Fonctionnalités <span className="text-primary">DataFuel</span>
            </h1>
            <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez toutes les fonctionnalités qui font de DataFuel la plateforme de référence pour la monétisation
              sécurisée de vos données personnelles.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Connexion via wallet ou email */}
            <div className="bg-card rounded-2xl p-8 border border-border group hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Wallet className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair font-bold text-xl text-foreground mb-3">Connexion flexible</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Connectez-vous facilement avec votre wallet Web3 préféré (MetaMask, WalletConnect) ou utilisez
                    simplement votre adresse email pour une expérience simplifiée.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Support MetaMask, WalletConnect, Coinbase Wallet
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Connexion email pour les débutants
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Authentification sécurisée 2FA
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Gestion de wallet intégrée */}
            <div className="bg-card rounded-2xl p-8 border border-border group hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair font-bold text-xl text-foreground mb-3">Wallet intégré</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Gérez vos tokens $DFL directement dans l'application avec notre wallet intégré. Envoyez, recevez et
                    suivez vos récompenses en temps réel.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Gestion native des tokens $DFL
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Historique des transactions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Interface intuitive et sécurisée
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Récompenses en $DFL */}
            <div className="bg-card rounded-2xl p-8 border border-border group hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Coins className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair font-bold text-xl text-foreground mb-3">Récompenses $DFL</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Gagnez des tokens $DFL pour chaque donnée partagée. Plus vous participez, plus vous êtes récompensé
                    selon un système de points transparent et équitable.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Récompenses automatiques et instantanées
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Système de points basé sur la valeur des données
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Bonus de fidélité pour les utilisateurs actifs
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Protection et anonymisation */}
            <div className="bg-card rounded-2xl p-8 border border-border group hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair font-bold text-xl text-foreground mb-3">Protection maximale</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Vos données sont anonymisées et chiffrées avant d'être partagées. Vous gardez le contrôle total sur
                    ce qui est partagé et avec qui.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Chiffrement de bout en bout
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Anonymisation avancée des données
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Contrôle granulaire des permissions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="bg-card/50 rounded-2xl p-8 border border-border">
            <h2 className="font-playfair font-bold text-2xl text-foreground mb-8 text-center">
              Fonctionnalités avancées
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-inter font-semibold text-foreground mb-2">Stockage décentralisé</h3>
                <p className="text-muted-foreground text-sm">
                  Vos données sont stockées de manière décentralisée sur IPFS
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-inter font-semibold text-foreground mb-2">Analytics personnels</h3>
                <p className="text-muted-foreground text-sm">Suivez vos gains et l'utilisation de vos données</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-inter font-semibold text-foreground mb-2">Gouvernance DAO</h3>
                <p className="text-muted-foreground text-sm">Participez aux décisions importantes de la plateforme</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-inter font-semibold text-foreground mb-2">Audit de sécurité</h3>
                <p className="text-muted-foreground text-sm">Smart contracts audités par des experts en sécurité</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
