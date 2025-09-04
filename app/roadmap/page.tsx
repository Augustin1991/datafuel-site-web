import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckCircle, Circle, Coins, Smartphone, Users, TrendingUp } from "lucide-react"

const roadmapSteps = [
  {
    title: "Création du token",
    description: "Déploiement du smart contract $DFL sur Polygon et mise en place de l'infrastructure blockchain",
    status: "completed",
    icon: Coins,
    date: "Q4 2024",
    details: [
      "Smart contract ERC-20 audité",
      "Déploiement sur Polygon mainnet",
      "Pools de liquidité initiaux",
      "Interface de staking",
    ],
  },
  {
    title: "Lancement de l'app mobile",
    description: "Application mobile native pour iOS et Android avec toutes les fonctionnalités DataFuel",
    status: "in-progress",
    icon: Smartphone,
    date: "Q1 2025",
    details: [
      "Interface utilisateur intuitive",
      "Wallet intégré",
      "Système de récompenses",
      "Gestion des données personnelles",
    ],
  },
  {
    title: "Mise en place de la DAO",
    description: "Lancement de la gouvernance décentralisée et transfert du contrôle à la communauté",
    status: "upcoming",
    icon: Users,
    date: "Q2 2025",
    details: [
      "Smart contracts de gouvernance",
      "Interface de vote",
      "Propositions communautaires",
      "Trésorerie décentralisée",
    ],
  },
  {
    title: "Déploiement marketing",
    description: "Campagne de marketing globale et expansion vers de nouveaux marchés",
    status: "upcoming",
    icon: TrendingUp,
    date: "Q3 2025",
    details: [
      "Partenariats stratégiques",
      "Campagnes d'acquisition",
      "Expansion internationale",
      "Intégrations tierces",
    ],
  },
]

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Roadmap <span className="text-primary">DataFuel</span>
            </h1>
            <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Suivez l'évolution de DataFuel à travers les étapes clés de notre développement. Une vision claire pour
              révolutionner la monétisation des données personnelles.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div className="flex justify-between items-start relative">
                {/* Timeline Line */}
                <div className="absolute top-16 left-0 right-0 h-0.5 bg-border"></div>
                <div className="absolute top-16 left-0 h-0.5 bg-primary" style={{ width: "33%" }}></div>

                {roadmapSteps.map((step, index) => {
                  const IconComponent = step.icon
                  return (
                    <div key={index} className="flex flex-col items-center relative" style={{ width: "25%" }}>
                      {/* Timeline Node */}
                      <div
                        className={`w-8 h-8 rounded-full border-4 bg-background flex items-center justify-center mb-4 relative z-10 ${
                          step.status === "completed"
                            ? "border-primary"
                            : step.status === "in-progress"
                              ? "border-primary"
                              : "border-border"
                        }`}
                      >
                        {step.status === "completed" ? (
                          <CheckCircle className="h-4 w-4 text-primary" />
                        ) : step.status === "in-progress" ? (
                          <Circle className="h-4 w-4 text-primary fill-primary" />
                        ) : (
                          <Circle className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>

                      {/* Card */}
                      <div
                        className={`bg-card rounded-xl p-6 border w-full ${
                          step.status === "completed" || step.status === "in-progress"
                            ? "border-primary/50"
                            : "border-border"
                        }`}
                      >
                        <div className="text-center mb-4">
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 ${
                              step.status === "completed" || step.status === "in-progress"
                                ? "bg-primary/10"
                                : "bg-muted"
                            }`}
                          >
                            <IconComponent
                              className={`h-6 w-6 ${
                                step.status === "completed" || step.status === "in-progress"
                                  ? "text-primary"
                                  : "text-muted-foreground"
                              }`}
                            />
                          </div>
                          <span className="text-sm font-medium text-primary">{step.date}</span>
                        </div>

                        <h3 className="font-playfair font-bold text-lg text-foreground mb-3 text-center">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 text-center leading-relaxed">
                          {step.description}
                        </p>

                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-8">
              {roadmapSteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full border-4 bg-background flex items-center justify-center ${
                          step.status === "completed"
                            ? "border-primary"
                            : step.status === "in-progress"
                              ? "border-primary"
                              : "border-border"
                        }`}
                      >
                        {step.status === "completed" ? (
                          <CheckCircle className="h-4 w-4 text-primary" />
                        ) : step.status === "in-progress" ? (
                          <Circle className="h-4 w-4 text-primary fill-primary" />
                        ) : (
                          <Circle className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>
                      {index < roadmapSteps.length - 1 && (
                        <div
                          className={`w-0.5 h-24 mt-2 ${step.status === "completed" ? "bg-primary" : "bg-border"}`}
                        ></div>
                      )}
                    </div>

                    <div
                      className={`bg-card rounded-xl p-6 border flex-1 ${
                        step.status === "completed" || step.status === "in-progress"
                          ? "border-primary/50"
                          : "border-border"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            step.status === "completed" || step.status === "in-progress" ? "bg-primary/10" : "bg-muted"
                          }`}
                        >
                          <IconComponent
                            className={`h-5 w-5 ${
                              step.status === "completed" || step.status === "in-progress"
                                ? "text-primary"
                                : "text-muted-foreground"
                            }`}
                          />
                        </div>
                        <div>
                          <h3 className="font-playfair font-bold text-lg text-foreground">{step.title}</h3>
                          <span className="text-sm font-medium text-primary">{step.date}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{step.description}</p>

                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
