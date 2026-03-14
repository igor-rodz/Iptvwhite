import { Button } from '@/components/ui/button'
import { Play, Sparkles, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export function HeroSection() {
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerateTest = async () => {
    setIsLoading(true)
    const toastId = toast.loading('Gerando seu acesso de teste...')

    try {
      const response = await fetch('/api/generate-test', {
        method: 'POST',
      })

      const data = await response.json()

      if (response.ok) {
        // Here we handle the successful response
        // Note: The structure depends on what Sigma API returns
        // We'll show the message and potentially the credentials
        console.log('API Success:', data)
        const message = data.msg || data.message || 'Teste gerado com sucesso! Verifique os dados abaixo.'
        toast.success(message, { id: toastId, duration: 10000 })
        
        // If the API returns credentials in a specific format, we could show them
        if (data.username && data.password) {
          toast.info(`Usuário: ${data.username} | Senha: ${data.password}`, { duration: 15000 })
        }
      } else {
        throw new Error(data.error || 'Erro ao gerar teste')
      }
    } catch (error) {
      console.error('API Error:', error)
      toast.error('Não foi possível gerar o teste automaticamente agora. Tente pelo WhatsApp!', { id: toastId })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative min-h-screen flex items-start md:items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_oklch(0.25_0.15_145),_transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo Principal */}
          <div className="flex justify-center mb-6">
            <div className="h-20 md:h-28 flex items-center justify-center animate-logo-glow">
              <span className="text-4xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                SUA MARCA
              </span>
            </div>
          </div>

          {/* Badge de destaque */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Teste Grátis - Sem compromisso
            </span>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            O entretenimento do cinema,{' '}
            <span className="text-primary">agora na sua casa</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Mais de 2.000 canais ao vivo e 40.000+ filmes e séries em qualidade 4K.
            Sem travamentos, sem limites.
          </p>

          {/* Botão de CTA */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="h-16 px-10 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:scale-105 active:scale-95"
              onClick={handleGenerateTest}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="w-6 h-6 mr-2 animate-spin" />
              ) : (
                <Play className="w-6 h-6 mr-2 fill-current" />
              )}
              {isLoading ? 'GERANDO ACESSO...' : 'QUERO MEU ACESSO IMEDIATO'}
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex flex-col items-center justify-center gap-4 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-muted"
                  >
                    <img
                      src={`/avatars/avatar${i}.png`}
                      alt={`Cliente ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="font-medium text-foreground">+10.000 clientes ativos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span>4.9/5.0 avaliação média</span>
            </div>
          </div>

          {/* Garantia */}
          <div className="inline-flex items-center gap-2 bg-muted/30 rounded-lg px-6 py-3 border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-2xl">🛡️</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Garantia de 7 dias</p>
              <p className="text-sm text-muted-foreground">ou seu dinheiro de volta</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(to_top,_oklch(0.15_0_0),_transparent)]" />
    </section>
  )
}
