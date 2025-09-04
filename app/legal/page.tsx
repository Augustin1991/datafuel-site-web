
import {{ Navigation }} from "@/components/navigation"
import {{ Footer }} from "@/components/footer"

export default function Page() {{
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-playfair text-4xl font-bold mb-6">Mentions légales & Conformité</h1>
        <div className="prose prose-invert">
          <p>Contenu à affiner selon le document DataFuel. Cette page résume les points clés et peut être étendue.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}