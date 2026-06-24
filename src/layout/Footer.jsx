import { Facebook, Linkedin, Twitter } from "lucide-react";
import { useLocation } from "react-router-dom";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61576061600092", label: "Facebook" },
  /* { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" }, */
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Latest" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const isCollectionPage = location.pathname === "/collections";
  const isProductPage = location.pathname.startsWith("/product/");

  const hideFooterLinks = isCollectionPage || isProductPage;

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="/" className="text-xl font-bold tracking-tight">
              GL<span className="text-primary">.</span>
            </a>

            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Judith Munachimso. All rights reserved.
            </p>
          </div>

          {!hideFooterLinks && (
            <nav className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};