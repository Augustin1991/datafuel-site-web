import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Vote, Users, FileText, TrendingUp, ArrowRight, Clock } from "lucide-react"

export default function DAOPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-foreground mb-6">
              DAO & <span className="text-primary">Gouvernance</span>
            </h1>
            <p className="font-inter text-xl text-primary font-semibold mb-4">1 $DFL = 1 voix</p>
            <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              La gouvernance se fait via la DAO de DataFuel. Chaque détenteur de tokens $DFL peut participer aux
              décisions importantes qui façonnent l'avenir de la plateforme.
            </p>
          </div>

          {/* Governance Flow */}
          <div className="bg-card rounded-2xl p-8 border border-border mb-16">
            <h2 className="font-playfair font-bold text-2xl text-foreground mb-8 text-center">
              Comment fonctionne la gouvernance
            </h2>

            {/* Desktop Flow */}
            <div className="hidden lg:flex items-center justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2 z-0"></div>
              <div
                className="absolute top-1/2 left-0 h-0.5 bg-primary transform -translate-y-1/2 z-0"
                style={{ width: "75%" }}
              ></div>

              <div className="flex flex-col items-center text-center relative z-10 bg-background px-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-inter font-semibold text-foreground mb-2">Détenir des $DFL</h3>
                <p className="text-muted-foreground text-sm max-w-32">
                  Acquérir des tokens pour participer à la gouvernance
                </p>
              </div>

              <ArrowRight className="h-6 w-6 text-primary relative z-10" />

              <div className="flex flex-col items-center text-center relative z-10 bg-background px-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-inter font-semibold text-foreground mb-2">Propositions</h3>
                <p className="text-muted-foreground text-sm max-w-32">
                  Soumettre ou consulter les propositions communautaires
                </p>
              </div>

              <ArrowRight className="h-6 w-6 text-primary relative z-10" />

              <div className="flex flex-col items-center text-center relative z-10 bg-background px-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Vote className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-inter font-semibold text-foreground mb-2">Voter</h3>
                <p className="text-muted-foreground text-sm max-w-32">
                  Exprimer votre voix sur les décisions importantes
                </p>
              </div>

              <ArrowRight className="h-6 w-6 text-primary relative z-10" />

              <div className="flex flex-col items-center text-center relative z-10 bg-background px-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-inter font-semibold text-foreground mb-2">Implémentation</h3>
                <p className="text-muted-foreground text-sm max-w-32">Les décisions approuvées sont mises en œuvre</p>
              </div>
            </div>

            {/* Mobile Flow */}
            <div className="lg:hidden space-y-6">
              {[
                {
                  icon: Users,
                  title: "Détenir des $DFL",
                  desc: "Acquérir des tokens pour participer à la gouvernance",
                },
                {
                  icon: FileText,
                  title: "Propositions",
                  desc: "Soumettre ou consulter les propositions communautaires",
                },
                { icon: Vote, title: "Voter", desc: "Exprimer votre voix sur les décisions importantes" },
                { icon: TrendingUp, title: "Implémentation", desc: "Les décisions approuvées sont mises en œuvre" },
              ].map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      {index < 3 && <div className="w-0.5 h-8 bg-border mt-2"></div>}
                    </div>
                    <div className="flex-1 pb-4">
                      <h3 className="font-inter font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* DAO Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-xl p-6 border border-border">
              <Vote className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-inter font-semibold text-foreground mb-3">Votes transparents</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Tous les votes sont enregistrés sur la blockchain, garantissant une transparence totale du processus
                démocratique.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-inter font-semibold text-foreground mb-3">Participation équitable</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Chaque token $DFL représente une voix, assurant une représentation proportionnelle de tous les
                participants.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-inter font-semibold text-foreground mb-3">Propositions ouvertes</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Tout détenteur de $DFL peut soumettre des propositions pour améliorer la plateforme et son écosystème.
              </p>
            </div>
          </div>

          {/* Current Status */}
          <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20 text-center">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="font-playfair font-bold text-2xl text-foreground mb-4">Lancement prévu Q2 2025</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              La DAO DataFuel sera lancée au deuxième trimestre 2025. En attendant, vous pouvez acquérir des tokens $DFL
              et rejoindre notre communauté pour participer aux discussions préparatoires.
            </p>
            <Button size="lg" disabled className="bg-muted text-muted-foreground cursor-not-allowed">
              Participer (bientôt disponible)
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
