import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    slug: "souverainete-des-donnees",
    title: "La souveraineté des données : reprendre le contrôle de votre vie numérique",
    excerpt:
      "Découvrez pourquoi la souveraineté des données est cruciale dans notre monde numérique et comment DataFuel vous aide à reprendre le contrôle.",
    date: "15 Décembre 2024",
    readTime: "8 min",
    category: "Éducation",
    image: "/data-sovereignty-privacy.png",
  },
  {
    slug: "tokens-erc20-explication",
    title: "Comprendre les tokens ERC-20 : le standard qui révolutionne la finance",
    excerpt:
      "Une explication complète des tokens ERC-20, leur fonctionnement technique et pourquoi ils sont essentiels dans l'écosystème Web3.",
    date: "10 Décembre 2024",
    readTime: "6 min",
    category: "Technique",
    image: "/erc-20-ethereum.png",
  },
  {
    slug: "pourquoi-polygon",
    title: "Pourquoi choisir Polygon pour DataFuel : performance et durabilité",
    excerpt:
      "Analyse des avantages de Polygon par rapport à Ethereum : frais réduits, vitesse de transaction et impact environnemental.",
    date: "5 Décembre 2024",
    readTime: "5 min",
    category: "Technique",
    image: "/polygon-scalability.png",
  },
  {
    slug: "monetisation-donnees-ethique",
    title: "Monétisation éthique des données : un nouveau paradigme économique",
    excerpt:
      "Comment DataFuel révolutionne la monétisation des données personnelles en plaçant l'utilisateur au centre du processus.",
    date: "1 Décembre 2024",
    readTime: "7 min",
    category: "Éducation",
    image: "/ethical-data-monetization-privacy.png",
  },
  {
    slug: "dao-gouvernance-decentralisee",
    title: "DAO et gouvernance décentralisée : l'avenir de la prise de décision",
    excerpt:
      "Explorez le concept de DAO et découvrez comment la gouvernance décentralisée transforme la gestion des organisations.",
    date: "25 Novembre 2024",
    readTime: "9 min",
    category: "Gouvernance",
    image: "/dao-governance-voting.png",
  },
  {
    slug: "securite-blockchain-donnees",
    title: "Sécurité blockchain : comment vos données sont protégées",
    excerpt:
      "Plongez dans les mécanismes de sécurité de la blockchain et découvrez comment DataFuel protège vos informations personnelles.",
    date: "20 Novembre 2024",
    readTime: "6 min",
    category: "Sécurité",
    image: "/blockchain-security-data-protection-encryption.png",
  },
]

const categories = ["Tous", "Éducation", "Technique", "Gouvernance", "Sécurité"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Blog & <span className="text-primary">Éducation</span>
            </h1>
            <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez les dernières actualités, guides techniques et analyses sur le Web3, la blockchain et la
              souveraineté des données.
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "Tous"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-card rounded-xl border border-border overflow-hidden group hover:border-primary/50 transition-colors"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="font-playfair font-bold text-lg text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    Lire l'article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
