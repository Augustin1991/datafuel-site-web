"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { ExternalLink, Coins, TrendingUp, Users, Building, Droplets } from "lucide-react"

const tokenDistribution = [
  { name: "Utilisateurs", value: 40, color: "#10b981" },
  { name: "DAO", value: 20, color: "#3b82f6" },
  { name: "Liquidité", value: 20, color: "#8b5cf6" },
  { name: "Équipe", value: 10, color: "#f59e0b" },
  { name: "Partenaires", value: 10, color: "#ef4444" },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
        <p className="text-foreground font-semibold">{`${payload[0].name}: ${payload[0].value}%`}</p>
      </div>
    )
  }
  return null
}

export default function TokenomicsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Tokenomics <span className="text-primary">$DFL</span>
            </h1>
            <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez la distribution et l'économie du token DataFuel. Un modèle économique conçu pour récompenser
              équitablement tous les participants de l'écosystème.
            </p>
          </div>

          {/* Token Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <Coins className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-inter font-semibold text-foreground mb-2">Token Standard</h3>
              <p className="text-muted-foreground">ERC-20 sur Polygon</p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-inter font-semibold text-foreground mb-2">Supply Total</h3>
              <p className="text-muted-foreground">1,000,000,000 $DFL</p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-inter font-semibold text-foreground mb-2">Gouvernance</h3>
              <p className="text-muted-foreground">1 $DFL = 1 voix</p>
            </div>
          </div>

          {/* Distribution Chart */}
          <div className="bg-card rounded-2xl p-8 border border-border mb-16">
            <h2 className="font-playfair font-bold text-2xl text-foreground mb-8 text-center">
              Distribution des tokens
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Pie Chart */}
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={tokenDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {tokenDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Legend and Details */}
              <div className="space-y-4">
                {tokenDistribution.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="font-inter font-medium text-foreground">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-foreground">{item.value}%</span>
                      <p className="text-sm text-muted-foreground">{(item.value * 10000000).toLocaleString()} $DFL</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Distribution Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="font-inter font-semibold text-foreground">Utilisateurs (40%)</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Récompenses pour le partage de données, programmes de fidélité et incitations à l'adoption de la
                plateforme.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Building className="h-6 w-6 text-blue-500" />
                <h3 className="font-inter font-semibold text-foreground">DAO (20%)</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Trésorerie de la DAO pour financer le développement, les partenariats et les initiatives communautaires.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="h-6 w-6 text-purple-500" />
                <h3 className="font-inter font-semibold text-foreground">Liquidité (20%)</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Pools de liquidité sur les DEX, market making et stabilité du prix du token.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-yellow-500" />
                <h3 className="font-inter font-semibold text-foreground">Équipe (10%)</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Allocation pour l'équipe fondatrice avec vesting sur 4 ans pour assurer l'engagement long terme.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Building className="h-6 w-6 text-red-500" />
                <h3 className="font-inter font-semibold text-foreground">Partenaires (10%)</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Réservé aux partenaires stratégiques, conseillers et investisseurs early-stage.
              </p>
            </div>

            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
              <div className="text-center">
                <h3 className="font-inter font-semibold text-foreground mb-3">Explorer sur PolygonScan</h3>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Voir le contrat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
