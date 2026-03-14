import { useState } from 'react'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setIsOpen(false)
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2 group cursor-pointer" onClick={scrollToTop}>
                        <div className="h-10 flex items-center justify-center animate-logo-glow transition-transform group-hover:scale-105">
                            <span className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                                SUA MARCA
                            </span>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <button onClick={scrollToTop} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none cursor-pointer">Início</button>
                        <a href="#planos" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Planos</a>
                        <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Suporte</a>
                        <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90 font-bold"
                            onClick={() => window.open('https://wa.me/5500000000000', '_blank')}
                        >
                            TESTE GRÁTIS
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors focus:outline-none cursor-pointer"
                        onClick={toggleMenu}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 transition-all duration-300 origin-top bg-card",
                isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
            )}>
                <button
                    onClick={scrollToTop}
                    className="text-left py-2 font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                    Início
                </button>
                <a
                    href="#planos"
                    onClick={() => setIsOpen(false)}
                    className="py-2 font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                    Planos
                </a>
                <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                    Suporte
                </a>
                <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 font-bold w-full"
                    onClick={() => window.open('https://wa.me/5500000000000', '_blank')}
                >
                    TESTE GRÁTIS AGORA
                </Button>
            </div>
        </nav>
    )
}
