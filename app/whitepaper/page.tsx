import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Download, FileText, Eye, Shield, Zap, Users } from "lucide-react"

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Whitepaper <span className="text-primary">DataFuel</span>
            </h1>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Découvrez en détail la vision, la technologie et l'économie du token DataFuel. Notre livre blanc présente
              une approche révolutionnaire de la monétisation des données personnelles.
            </p>
          </div>

          {/* PDF Preview Card */}
          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* PDF Preview Mockup */}
              <div className="flex-1">
                <div className="bg-background/50 rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                    <span className="font-inter font-semibold text-foreground">DataFuel_Whitepaper_v1.0.pdf</span>
                  </div>

                  {/* Mockup PDF content */}
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="h-2 bg-muted rounded w-3/4"></div>
                    <div className="h-2 bg-muted rounded w-full"></div>
                    <div className="h-2 bg-muted rounded w-2/3"></div>
                    <div className="h-2 bg-muted rounded w-5/6"></div>
                    <div className="h-2 bg-muted rounded w-1/2"></div>
                  </div>

                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <h3 className="font-inter font-semibold text-foreground mb-2">Sommaire</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>1. Introduction et vision</li>
                      <li>2. Problématique actuelle des données</li>
                      <li>3. Solution DataFuel</li>
                      <li>4. Architecture technique</li>
                      <li>5. Tokenomics du $DFL</li>
                      <li>6. Gouvernance DAO</li>
                      <li>7. Roadmap et développement</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Download Actions */}
              <div className="flex-shrink-0">
                <div className="text-center space-y-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                    <Download className="h-5 w-5 mr-2" />
                    Télécharger le PDF
                  </Button>

                  <Button variant="outline" size="lg" className="border-border hover:bg-accent w-full bg-transparent">
                    <Eye className="h-5 w-5 mr-2" />
                    Aperçu en ligne
                  </Button>

                  <div className="text-sm text-muted-foreground">
                    <p>Version 1.0 • 24 pages</p>
                    <p>Dernière mise à jour : Décembre 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-inter font-semibold text-foreground mb-2">Sécurité blockchain</h3>
              <p className="text-muted-foreground text-sm">
                Architecture décentralisée garantissant la protection des données
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-inter font-semibold text-foreground mb-2">Innovation Web3</h3>
              <p className="text-muted-foreground text-sm">Première plateforme de monétisation éthique des données</p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-inter font-semibold text-foreground mb-2">Gouvernance communautaire</h3>
              <p className="text-muted-foreground text-sm">
                Décisions prises collectivement par les détenteurs de $DFL
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
