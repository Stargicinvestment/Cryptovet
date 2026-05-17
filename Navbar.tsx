import { Link } from "wouter";
import { Wallet, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm text-slate-900 py-3"
          : "bg-transparent text-white py-5"
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" data-testid="link-home">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-lg transition-colors ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
            V
          </div>
          <span className="text-xl font-bold tracking-tight">CryptoVault</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <Link href="/" className="hover:opacity-75 transition-opacity" data-testid="nav-home">HOME</Link>
          <Link href="/about" className="hover:opacity-75 transition-opacity" data-testid="nav-about">ABOUT</Link>
          <Link href="/markets" className="hover:opacity-75 transition-opacity" data-testid="nav-markets">MARKETS</Link>
          <Link href="/invest" className="hover:opacity-75 transition-opacity" data-testid="nav-invest">INVEST</Link>
          <Link href="/contact" className="hover:opacity-75 transition-opacity" data-testid="nav-contact">CONTACT</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant={isScrolled ? "outline" : "secondary"}
            className={!isScrolled ? "bg-white/10 hover:bg-white/20 text-white border-none" : ""}
            size="sm"
            data-testid="button-wallet"
          >
            <Wallet className="w-4 h-4 mr-2" />
            Connect Wallet
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white text-slate-900 shadow-xl border-t p-4 flex flex-col gap-4">
          <Link href="/" className="p-2 font-medium border-b" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
          <Link href="/about" className="p-2 font-medium border-b" onClick={() => setMobileMenuOpen(false)}>ABOUT</Link>
          <Link href="/markets" className="p-2 font-medium border-b" onClick={() => setMobileMenuOpen(false)}>MARKETS</Link>
          <Link href="/invest" className="p-2 font-medium border-b" onClick={() => setMobileMenuOpen(false)}>INVEST</Link>
          <Link href="/contact" className="p-2 font-medium border-b" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
          <Button className="w-full mt-2" data-testid="button-wallet-mobile">
            <Wallet className="w-4 h-4 mr-2" />
            Connect Wallet
          </Button>
        </div>
      )}
    </header>
  );
      }
