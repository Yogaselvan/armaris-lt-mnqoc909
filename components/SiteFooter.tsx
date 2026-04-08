"use client";

import { Link } from "@heroui/react";

export function SiteFooter() {
  return (
    <footer className="relative bg-content1 overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img src="https://armaris.lt/wp-content/uploads/2023/06/Untitled-design.png" alt="Armaris.lt" className="h-12 w-auto mb-5 object-contain opacity-90" onError={(e: any) => { e.target.style.display = 'none'; }} />
            <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">Armaris.lt</h3>
            
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-5">Navigacija</h4>
            <Link href="/" className="text-default-400 hover:text-primary transition-colors duration-200 text-sm block mb-2">Pradžia</Link>
            <Link href="/vykdomi-projektai" className="text-default-400 hover:text-primary transition-colors duration-200 text-sm block mb-2">Vykdomi projektai</Link>
            <Link href="/igyvendinti-projektai" className="text-default-400 hover:text-primary transition-colors duration-200 text-sm block mb-2">Įgyvendinti projektai</Link>
            <Link href="/namu-projektai" className="text-default-400 hover:text-primary transition-colors duration-200 text-sm block mb-2">Namų projektai</Link>
            <Link href="/kontaktai" className="text-default-400 hover:text-primary transition-colors duration-200 text-sm block mb-2">Kontaktai</Link>
          </div>

          {/* Contact */}
          <div />
        </div>

        {/* Bottom bar with gradient divider */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-default-400">&copy; 2026 Armaris.lt. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-xs text-default-500 hover:text-primary transition-colors">Privacy</Link>
              <Link href="#" className="text-xs text-default-500 hover:text-primary transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
    </footer>
  );
}
