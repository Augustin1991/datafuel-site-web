import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Twitter, MessageCircle, Send, Linkedin, Users, Heart, MessageSquare } from "lucide-react"
import Image from "next/image"

const socialLinks = [
  {
    name: "Discord",
    icon: MessageCircle,
    url: "#",
    description: "Rejoignez notre serveur Discord pour discuter avec la communauté et l'équipe DataFuel",
    members: "2,500+ membres",
    color: "text-indigo-400",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "#",
    description: "Suivez-nous sur Twitter pour les dernières actualités et annonces",
    members: "5,200+ followers",
    color: "text-blue-400",
  },
  {
    name: "Telegram",
    icon: Send,
    url: "#",
    description: "Rejoignez notre canal Telegram pour des discussions en temps réel",
    members: "1,800+ membres",
    color: "text-blue-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "#",
    description: "Connectez-vous avec nous sur LinkedIn pour les mises à jour professionnelles",
    members: "800+ followers",
    color: "text-blue-600",
  },
]

const communityStats = [
  { label: "Membres actifs", value: "10,000+", icon: Users },
  { label: "Messages par jour", value: "500+", icon: MessageSquare },
  { label: "Pays représentés", value: "45+", icon: Heart },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Rejoignez la <span className="text-primary">Communauté</span>
            </h1>
            <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Connectez-vous avec des milliers d'utilisateurs passionnés par la souveraineté des données et l'économie
              Web3. Partagez vos idées, posez vos questions et participez à l'avenir de DataFuel.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {communityStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="bg-card rounded-xl p-6 border border-border text-center">
                  <IconComponent className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>

          {/* Social Platforms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {socialLinks.map((platform, index) => {
              const IconComponent = platform.icon
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border group hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-background/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className={`h-6 w-6 ${platform.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-inter font-semibold text-foreground">{platform.name}</h3>
                        <span className="text-sm text-muted-foreground">{platform.members}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{platform.description}</p>
                      <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        <a href={platform.url} target="_blank" rel="noopener noreferrer">
                          Rejoindre
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Twitter Widget Mockup */}
          <div className="bg-card rounded-2xl p-8 border border-border mb-16">
            <h2 className="font-playfair font-bold text-2xl text-foreground mb-6 text-center">
              Dernières actualités Twitter
            </h2>

            <div className="space-y-4">
              {/* Tweet 1 */}
              <div className="bg-background/50 rounded-lg p-4 border border-border">
                <div className="flex items-start gap-3">
                  <Image
                    src="/logo-datafuel.png"
                    alt="DataFuel Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-foreground">DataFuel</span>
                      <span className="text-primary">@DataFuelToken</span>
                      <span className="text-muted-foreground text-sm">• 2h</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      🚀 Mise à jour de développement : L'interface de staking $DFL est maintenant en phase de test beta
                      ! Les premiers utilisateurs pourront bientôt commencer à gagner des récompenses.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tweet 2 */}
              <div className="bg-background/50 rounded-lg p-4 border border-border">
                <div className="flex items-start gap-3">
                  <Image
                    src="/logo-datafuel.png"
                    alt="DataFuel Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-foreground">DataFuel</span>
                      <span className="text-primary">@DataFuelToken</span>
                      <span className="text-muted-foreground text-sm">• 1j</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      📚 Nouveau article de blog : "La souveraineté des données expliquée simplement". Découvrez
                      pourquoi reprendre le contrôle de vos données est essentiel dans le monde numérique d'aujourd'hui.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tweet 3 */}
              <div className="bg-background/50 rounded-lg p-4 border border-border">
                <div className="flex items-start gap-3">
                  <Image
                    src="/logo-datafuel.png"
                    alt="DataFuel Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-foreground">DataFuel</span>
                      <span className="text-primary">@DataFuelToken</span>
                      <span className="text-muted-foreground text-sm">• 2j</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      🎉 Merci à notre incroyable communauté ! Nous avons atteint 10 000 membres sur Discord. Votre
                      soutien et vos contributions rendent DataFuel plus fort chaque jour.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20 text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="font-playfair font-bold text-2xl text-foreground mb-4">Prêt à nous rejoindre ?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Faites partie de la révolution des données. Rejoignez notre communauté grandissante et participez à
              construire l'avenir de la monétisation éthique des données.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Rejoindre Discord
              </Button>
              <Button variant="outline" size="lg" className="border-border hover:bg-accent bg-transparent">
                Suivre sur Twitter
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
