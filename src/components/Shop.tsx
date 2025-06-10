import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Search, Filter, Menu, User, Heart, ShoppingBag } from "lucide-react";

const Shop = () => {
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
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Shop All Products</h1>
          <p className="text-muted-foreground mb-6">
            Discover our complete collection of products with great deals and
            fast shipping.
          </p>

          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              name: "Electronics",
              count: "150+ items",
              image:
                "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80",
            },
            {
              name: "Fashion",
              count: "200+ items",
              image:
                "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80",
            },
            {
              name: "Home & Kitchen",
              count: "120+ items",
              image:
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
            },
            {
              name: "Beauty",
              count: "80+ items",
              image:
                "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80",
            },
            {
              name: "Sports",
              count: "90+ items",
              image:
                "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
            },
            {
              name: "Books",
              count: "300+ items",
              image:
                "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",
            },
          ].map((category) => (
            <div key={category.name} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-3">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              </div>
              <h3 className="font-semibold text-lg">{category.name}</h3>
              <p className="text-muted-foreground text-sm">{category.count}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">
            Can't find what you're looking for?
          </h2>
          <p className="text-muted-foreground mb-4">
            Contact our customer service team for personalized assistance.
          </p>
          <Button>Contact Support</Button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
