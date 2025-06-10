import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  Clock,
  Flame,
  Tag,
  Star,
  Menu,
  Search,
  User,
  Heart,
  ShoppingBag,
} from "lucide-react";

const Deals = () => {
  // Mock data for cart items count
  const cartItemsCount = 3;

  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flashDeals = [
    {
      id: 1,
      name: "Wireless Headphones",
      originalPrice: 199.99,
      salePrice: 99.99,
      discount: 50,
      rating: 4.8,
      reviews: 1234,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    },
    {
      id: 2,
      name: "Smart Watch",
      originalPrice: 299.99,
      salePrice: 179.99,
      discount: 40,
      rating: 4.6,
      reviews: 856,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
    },
    {
      id: 3,
      name: "Laptop Backpack",
      originalPrice: 79.99,
      salePrice: 39.99,
      discount: 50,
      rating: 4.7,
      reviews: 432,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      originalPrice: 149.99,
      salePrice: 89.99,
      discount: 40,
      rating: 4.5,
      reviews: 678,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80",
    },
  ];

  const dailyDeals = [
    { category: "Electronics", discount: "Up to 60% off", items: "500+ items" },
    { category: "Fashion", discount: "Up to 70% off", items: "800+ items" },
    {
      category: "Home & Kitchen",
      discount: "Up to 50% off",
      items: "300+ items",
    },
    { category: "Beauty", discount: "Up to 45% off", items: "200+ items" },
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
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="h-8 w-8 text-red-500" />
            <h1 className="text-4xl font-bold">Hot Deals & Offers</h1>
            <Flame className="h-8 w-8 text-red-500" />
          </div>
          <p className="text-muted-foreground text-lg">
            Don't miss out on these incredible limited-time offers!
          </p>
        </div>

        {/* Flash Sale Countdown */}
        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-8 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">⚡ Flash Sale</h2>
            <p className="mb-6">
              Limited time offers - grab them before they're gone!
            </p>

            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                  <div className="text-2xl font-bold">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </div>
                </div>
                <div className="text-sm mt-1">Hours</div>
              </div>
              <div className="text-2xl">:</div>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                  <div className="text-2xl font-bold">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </div>
                </div>
                <div className="text-sm mt-1">Minutes</div>
              </div>
              <div className="text-2xl">:</div>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                  <div className="text-2xl font-bold">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </div>
                </div>
                <div className="text-sm mt-1">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        {/* Flash Deals Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Clock className="h-6 w-6" />
            Flash Deals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flashDeals.map((deal) => (
              <div
                key={deal.id}
                className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="relative">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
                    -{deal.discount}%
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{deal.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{deal.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({deal.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold">${deal.salePrice}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${deal.originalPrice}
                    </span>
                  </div>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Deals by Category */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Tag className="h-6 w-6" />
            Daily Deals by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dailyDeals.map((deal) => (
              <div
                key={deal.category}
                className="bg-card p-6 rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-2">{deal.category}</h3>
                <p className="text-2xl font-bold text-green-600 mb-1">
                  {deal.discount}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {deal.items}
                </p>
                <Button variant="outline" className="w-full">
                  Shop Now
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-muted p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-2">Never Miss a Deal!</h2>
          <p className="text-muted-foreground mb-4">
            Subscribe to get notified about flash sales and exclusive offers.
          </p>
          <Button size="lg">Subscribe for Deal Alerts</Button>
        </div>
      </div>
    </div>
  );
};

export default Deals;
