import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const homeNavLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Latest" },
  { href: "#experience", label: "Experience" },
  { href: "/collections", label: "Collections" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  const isCollectionsPage = location.pathname === "/collections";
  const isProductPage = location.pathname.startsWith("/product/");

  const hideContactButton = isCollectionsPage || isProductPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          GL<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {isCollectionsPage ? (
              <Link
                to="/"
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                Home
              </Link>
            ) : isProductPage ? (
              <>
                <Link
                  to="/"
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                >
                  Home
                </Link>

                <Link
                  to="/collections"
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                >
                  Collections
                </Link>
              </>
            ) : (
              homeNavLinks.map((link, index) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={index}
                    to={link.href}
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={link.href}
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                  >
                    {link.label}
                  </a>
                )
              )
            )}
          </div>
        </div>

        {/* Contact Button */}
        {!hideContactButton && (
          <div className="hidden md:block">
            <Button size="sm">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        )}

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {isCollectionsPage ? (
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                Home
              </Link>
            ) : isProductPage ? (
              <>
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-muted-foreground hover:text-foreground py-2"
                >
                  Home
                </Link>

                <Link
                  to="/collections"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-muted-foreground hover:text-foreground py-2"
                >
                  Collections
                </Link>
              </>
            ) : (
              homeNavLinks.map((link, index) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={index}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg text-muted-foreground hover:text-foreground py-2"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg text-muted-foreground hover:text-foreground py-2"
                  >
                    {link.label}
                  </a>
                )
              )
            )}

            {!hideContactButton && (
              <Button onClick={() => setIsMobileMenuOpen(false)}>
                <a href="#contact">Contact Me</a>
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};