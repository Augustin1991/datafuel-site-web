"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, MapPin, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [newsletter, setNewsletter] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Contactez-<span className="text-primary">nous</span>
            </h1>
            <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Une question sur DataFuel ? Besoin d'aide avec votre compte ? Notre équipe est là pour vous accompagner
              dans votre parcours vers la souveraineté des données.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-playfair font-bold text-2xl text-foreground mb-6">Envoyez-nous un message</h2>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="font-inter font-semibold text-foreground mb-2">Message envoyé !</h3>
                  <p className="text-muted-foreground">
                    Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background border-border text-foreground"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Adresse email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background border-border text-foreground"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-background border-border text-foreground resize-none"
                      placeholder="Décrivez votre question ou demande..."
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      id="newsletter"
                      type="checkbox"
                      checked={newsletter}
                      onChange={(e) => setNewsletter(e.target.checked)}
                      className="rounded border-border text-primary focus:ring-primary"
                    />
                    <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                      Je souhaite recevoir la newsletter DataFuel
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-playfair font-bold text-xl text-foreground mb-4">Informations de contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium">Email</p>
                      <a
                        href="mailto:support@datafuel.com"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        support@datafuel.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium">Heures de réponse</p>
                      <p className="text-muted-foreground text-sm">Lun-Ven, 9h-18h (CET)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium">Localisation</p>
                      <p className="text-muted-foreground text-sm">Europe, Remote-first</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-playfair font-bold text-xl text-foreground mb-4">Questions fréquentes</h3>
                <div className="space-y-3">
                  <a
                    href="/blog/souverainete-des-donnees"
                    className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    • Comment fonctionne la souveraineté des données ?
                  </a>
                  <a
                    href="/tokenomics"
                    className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    • Comment gagner des tokens $DFL ?
                  </a>
                  <a
                    href="/features"
                    className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    • Quelles sont les fonctionnalités disponibles ?
                  </a>
                  <a href="/dao" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                    • Comment participer à la gouvernance ?
                  </a>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                <h3 className="font-playfair font-bold text-xl text-foreground mb-3">Newsletter DataFuel</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Restez informé des dernières actualités, mises à jour techniques et opportunités de la plateforme
                  DataFuel.
                </p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    className="bg-background border-border text-foreground flex-1"
                  />
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">S'abonner</Button>
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
