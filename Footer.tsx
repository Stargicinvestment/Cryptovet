import { Link } from "wouter";
import { Twitter, Linkedin, Github, Disc } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 md:py-16" data-testid="footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-white text-lg">
                V
              </div>
              <span className="text-xl font-bold tracking-tight text-white">CryptoVault</span>
            </div>
            <p className="text-sm mb-6 max-w-xs">
              Premium crypto investment platform for serious retail investors. Institutional-grade tools without the complexity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="GitHub"><Github className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Discord"><Disc className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/markets" className="hover:text-white transition-colors">Markets</Link></li>
              <li><Link href="/invest" className="hover:text-white transition-colors">Investments</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio Manager</Link></li>
              <li><Link href="/security" className="hover:text-white transition-colors">Security Vault</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/compliance" className="hover:text-white transition-colors">Compliance</Link></li>
              <li><Link href="/risk" className="hover:text-white transition-colors">Risk Disclosure</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} CryptoVault Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              System Status: All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
  }
