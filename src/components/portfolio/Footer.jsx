import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10 font-inter glass">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/30">
          © 2026 <span className="text-gradient font-semibold">Phunyezwa Penelope Mjoli</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {[
            { href: "https://github.com/Sphile2012/PhumehMjoli", icon: Github },
            { href: "https://www.linkedin.com/in/phunyezwa-mjoli", icon: Linkedin },
            { href: "mailto:poomeigh503@gmail.com", icon: Mail },
          ].map(({ href, icon: Icon }) => (
            <a key={href} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              className="p-2 glass rounded-lg text-white/40 hover:text-violet-400 transition-all hover:scale-110 border border-white/10 hover:border-violet-400/30">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}