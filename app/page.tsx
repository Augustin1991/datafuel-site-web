import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StoreButtons } from "@/components/store-buttons"
import { ArrowRight, Shield, Coins, Users, Database } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mt-6"><StoreButtons /></div>
            <h1 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
              Redonnez de la valeur à <span className="text-primary">vos données</span>
            </h1>

            <p className="font-inter text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              DataFuel est une plateforme Web3 qui récompense les utilisateurs avec le token $DFL pour le partage
              sécurisé de leurs données personnelles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/whitepaper" className="flex items-center gap-2">
                  Lire le Whitepaper
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="border-border hover:bg-accent bg-transparent">
                <Link href="/community">Rejoindre la communauté</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Pourquoi choisir DataFuel ?
            </h2>
            <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto">
              Une approche révolutionnaire de la monétisation des données personnelles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-inter font-semibold text-foreground mb-2">Sécurité maximale</h3>
              <p className="text-muted-foreground text-sm">
                Vos données sont protégées par la blockchain et l'anonymisation
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Coins className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-inter font-semibold text-foreground mb-2">Récompenses $DFL</h3>
              <p className="text-muted-foreground text-sm">
                Gagnez des tokens pour chaque donnée partagée de manière sécurisée
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-inter font-semibold text-foreground mb-2">Gouvernance DAO</h3>
              <p className="text-muted-foreground text-sm">Participez aux décisions importantes de la plateforme</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-inter font-semibold text-foreground mb-2">Contrôle total</h3>
              <p className="text-muted-foreground text-sm">Vous décidez quelles données partager et avec qui</p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Info Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-foreground mb-6">
                  Le token <span className="text-primary">$DFL</span>
                </h2>
                <p className="font-inter text-muted-foreground text-lg mb-6 leading-relaxed">
                  DataFuel Token (DFL) est un token ERC-20 déployé sur le réseau Polygon. Il récompense les utilisateurs
                  pour le partage de leurs données et permet de participer à la gouvernance de la plateforme.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/tokenomics">Découvrir les tokenomics</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-border hover:bg-accent bg-transparent">
                    <Link href="/roadmap">Voir la roadmap</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-background/50 rounded-xl p-6 border border-border">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Réseau</span>
                    <span className="text-foreground font-semibold">Polygon</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Type</span>
                    <span className="text-foreground font-semibold">ERC-20</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Symbole</span>
                    <span className="text-primary font-semibold">$DFL</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Gouvernance</span>
                    <span className="text-foreground font-semibold">1 DFL = 1 voix</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
