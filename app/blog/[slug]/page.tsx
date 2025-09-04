import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  const posts: Record<string, any> = {
    "souverainete-des-donnees": {
      title: "La souveraineté des données : reprendre le contrôle de votre vie numérique",
      date: "15 Décembre 2024",
      readTime: "8 min",
      category: "Éducation",
      image: "/data-sovereignty-privacy.png",
      content: `
        <p>Dans notre monde hyperconnecté, nos données personnelles sont devenues l'or noir du 21ème siècle. Chaque clic, chaque recherche, chaque interaction en ligne génère des informations précieuses qui sont collectées, analysées et monétisées par de grandes entreprises technologiques.</p>

        <h2>Qu'est-ce que la souveraineté des données ?</h2>
        <p>La souveraineté des données fait référence au droit fondamental des individus de contrôler leurs informations personnelles. Cela inclut le droit de savoir quelles données sont collectées, comment elles sont utilisées, et surtout, le droit de bénéficier de leur valeur économique.</p>

        <h2>Le problème actuel</h2>
        <p>Aujourd'hui, la plupart des plateformes numériques fonctionnent selon un modèle où les utilisateurs "paient" avec leurs données en échange de services gratuits. Ce modèle présente plusieurs problèmes :</p>
        <ul>
          <li>Manque de transparence sur l'utilisation des données</li>
          <li>Absence de compensation pour les utilisateurs</li>
          <li>Risques de sécurité et de violation de la vie privée</li>
          <li>Concentration du pouvoir entre les mains de quelques géants technologiques</li>
        </ul>

        <h2>La solution DataFuel</h2>
        <p>DataFuel révolutionne ce paradigme en créant un écosystème où les utilisateurs sont directement récompensés pour le partage de leurs données. Notre plateforme garantit :</p>
        <ul>
          <li>Transparence totale sur l'utilisation des données</li>
          <li>Récompenses équitables en tokens $DFL</li>
          <li>Contrôle granulaire des permissions</li>
          <li>Sécurité maximale grâce à la blockchain</li>
        </ul>

        <h2>L'avenir de vos données</h2>
        <p>Avec DataFuel, vous n'êtes plus le produit, vous êtes le propriétaire. Chaque donnée partagée vous rapporte des tokens $DFL, vous permettant de participer à l'économie numérique tout en gardant le contrôle de votre vie privée.</p>

        <p>La souveraineté des données n'est pas seulement un concept technique, c'est un droit fondamental qui redéfinit notre relation avec le monde numérique.</p>
      `,
    },
    "tokens-erc20-explication": {
      title: "Comprendre les tokens ERC-20 : le standard qui révolutionne la finance",
      date: "10 Décembre 2024",
      readTime: "6 min",
      category: "Technique",
      image: "/erc-20-ethereum.png",
      content: `
        <p>Les tokens ERC-20 sont devenus la colonne vertébrale de l'écosystème DeFi (Finance Décentralisée). Mais qu'est-ce qui rend ce standard si spécial et pourquoi est-il crucial pour l'avenir de la finance ?</p>

        <h2>Qu'est-ce qu'un token ERC-20 ?</h2>
        <p>ERC-20 (Ethereum Request for Comment 20) est un standard technique qui définit un ensemble de règles que tous les tokens sur la blockchain Ethereum doivent suivre. Ce standard garantit l'interopérabilité entre différents tokens et applications.</p>

        <h2>Les fonctions essentielles</h2>
        <p>Chaque token ERC-20 doit implémenter six fonctions principales :</p>
        <ul>
          <li><code>totalSupply()</code> : Retourne le nombre total de tokens en circulation</li>
          <li><code>balanceOf()</code> : Retourne le solde d'une adresse spécifique</li>
          <li><code>transfer()</code> : Permet de transférer des tokens</li>
          <li><code>approve()</code> : Autorise une adresse à dépenser des tokens</li>
          <li><code>transferFrom()</code> : Transfère des tokens au nom d'une autre adresse</li>
          <li><code>allowance()</code> : Retourne le montant autorisé à être dépensé</li>
        </ul>

        <h2>Pourquoi DataFuel utilise ERC-20</h2>
        <p>Le choix du standard ERC-20 pour le token $DFL n'est pas anodin :</p>
        <ul>
          <li><strong>Interopérabilité</strong> : Compatible avec tous les wallets et exchanges</li>
          <li><strong>Sécurité</strong> : Standard éprouvé et audité</li>
          <li><strong>Liquidité</strong> : Facilite les échanges sur les DEX</li>
          <li><strong>Gouvernance</strong> : Permet l'implémentation de mécanismes de vote</li>
        </ul>

        <h2>L'évolution vers Polygon</h2>
        <p>Bien que $DFL soit un token ERC-20, nous avons choisi de le déployer sur Polygon pour bénéficier de :</p>
        <ul>
          <li>Frais de transaction réduits</li>
          <li>Vitesse de confirmation plus rapide</li>
          <li>Impact environnemental moindre</li>
          <li>Compatibilité totale avec Ethereum</li>
        </ul>

        <p>Les tokens ERC-20 représentent bien plus qu'un simple standard technique : ils sont la fondation d'une nouvelle économie décentralisée où chacun peut participer équitablement.</p>
      `,
    },
  }

  return posts[slug] || null
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="font-playfair font-bold text-2xl text-foreground mb-4">Article non trouvé</h1>
          <Link href="/blog" className="text-primary hover:text-primary/80">
            Retour au blog
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <article className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au blog
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>

            <h1 className="font-playfair font-bold text-3xl lg:text-4xl text-foreground mb-6">{post.title}</h1>

            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Par l'équipe DataFuel</div>
              <Button variant="outline" size="sm" className="border-border hover:bg-accent bg-transparent">
                <Share2 className="h-4 w-4 mr-2" />
                Partager
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-video bg-muted rounded-xl overflow-hidden mb-8">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-playfair prose-headings:font-bold prose-headings:text-foreground
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-li:text-muted-foreground
              prose-strong:text-foreground
              prose-code:text-primary prose-code:bg-primary/10 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-ul:text-muted-foreground
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      <Footer />
    </div>
  )
}
