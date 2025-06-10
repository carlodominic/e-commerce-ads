import React from "react";
import HeroCarousel from "./HeroCarousel";
import PromotionalBanner from "./PromotionalBanner";
import ProductGrid from "./ProductGrid";
import { ShoppingBag, Menu, Search, User, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const HomePage = () => {
  // Mock data for cart items count
  const cartItemsCount = 3;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 p-4">
                <a href="/" className="text-lg font-medium">
                  Home
                </a>
                <a href="/shop" className="text-lg font-medium">
                  Shop
                </a>
                <a href="/categories" className="text-lg font-medium">
                  Categories
                </a>
                <a href="/deals" className="text-lg font-medium">
                  Deals
                </a>
                <a href="/about" className="text-lg font-medium">
                  About
                </a>
                <a href="/contact" className="text-lg font-medium">
                  Contact
                </a>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">ShopNow</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-sm font-medium">
              Home
            </a>
            <a href="/shop" className="text-sm font-medium">
              Shop
            </a>
            <a href="/categories" className="text-sm font-medium">
              Categories
            </a>
            <a href="/deals" className="text-sm font-medium">
              Deals
            </a>
            <a href="/about" className="text-sm font-medium">
              About
            </a>
            <a href="/contact" className="text-sm font-medium">
              Contact
            </a>
          </nav>

          {/* Search, User, Wishlist, Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] pl-8 md:w-[200px] lg:w-[300px] rounded-md"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5 md:hidden" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Promotional Banner */}
      <PromotionalBanner />

      <main className="container mx-auto px-4 py-6">
        {/* Hero Carousel */}
        <section className="mb-12">
          <HeroCarousel />
        </section>

        {/* Featured Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Electronics", "Fashion", "Home & Kitchen", "Beauty"].map(
              (category) => (
                <div
                  key={category}
                  className="relative rounded-lg overflow-hidden aspect-square bg-muted hover:opacity-90 transition-opacity"
                >
                  <img
                    src={`https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80`}
                    alt={category}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">{category}</h3>
                  </div>
                </div>
              ),
            )}
          </div>
        </section>

        {/* Product Grid */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Button variant="outline">View All</Button>
          </div>
          <ProductGrid />
        </section>

        {/* Newsletter Signup */}
        <section className="mb-12 bg-muted p-8 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-2">
              Subscribe for Exclusive Deals
            </h2>
            <p className="text-muted-foreground mb-4">
              Be the first to know about new products and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">ShopNow</h3>
              <p className="text-sm text-muted-foreground">
                Your one-stop shop for all your shopping needs with the best
                deals and promotions.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Deals & Promotions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Gift Cards
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Help</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Shipping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Created by Carlo Dominic Suaybaguio |  All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
