import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  ArrowRight,
  Menu,
  Search,
  User,
  Heart,
  ShoppingBag,
} from "lucide-react";

const Categories = () => {
  // Mock data for cart items count
  const cartItemsCount = 3;

  const categories = [
    {
      name: "Electronics",
      description: "Latest gadgets, smartphones, laptops, and tech accessories",
      subcategories: ["Smartphones", "Laptops", "Headphones", "Smart Home"],
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80",
    },
    {
      name: "Fashion",
      description: "Trendy clothing, shoes, and accessories for all occasions",
      subcategories: [
        "Men's Clothing",
        "Women's Clothing",
        "Shoes",
        "Accessories",
      ],
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80",
    },
    {
      name: "Home & Kitchen",
      description: "Everything you need to make your house a home",
      subcategories: ["Furniture", "Kitchen Appliances", "Decor", "Storage"],
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    },
    {
      name: "Beauty & Personal Care",
      description: "Skincare, makeup, and personal care essentials",
      subcategories: ["Skincare", "Makeup", "Hair Care", "Fragrances"],
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
    },
    {
      name: "Sports & Outdoors",
      description: "Gear up for your active lifestyle and outdoor adventures",
      subcategories: [
        "Fitness Equipment",
        "Outdoor Gear",
        "Sports Apparel",
        "Recreation",
      ],
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    },
    {
      name: "Books & Media",
      description: "Expand your knowledge with books, audiobooks, and more",
      subcategories: [
        "Fiction",
        "Non-Fiction",
        "Educational",
        "Children's Books",
      ],
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
    },
  ];

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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Shop by Category</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our carefully curated categories to find exactly what you're
            looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h2 className="absolute bottom-4 left-4 text-white text-2xl font-bold">
                  {category.name}
                </h2>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>

                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Popular Subcategories:</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.subcategories.map((sub) => (
                      <span
                        key={sub}
                        className="px-3 py-1 bg-muted text-sm rounded-full hover:bg-muted/80 cursor-pointer transition-colors"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full group/btn">
                  Explore {category.name}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
