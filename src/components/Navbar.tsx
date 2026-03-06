import { Button } from './ui/button'

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img
                            src="/logo.png"
                            alt="AurixTV Logo"
                            className="h-10 w-auto animate-logo-glow transition-transform group-hover:scale-105 rounded-xl"
                        />
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none">Início</button>
                        <a href="#planos" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Planos</a>
                        <a href="https://wa.me/5511910437332" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Suporte</a>
                        <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90 font-bold"
                            onClick={() => window.open('https://wa.me/5511910437332', '_blank')}
                        >
                            TESTE GRÁTIS
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
