import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Headphones,
  Menu,
  Search,
  User,
  Heart,
  ShoppingBag,
} from "lucide-react";

const Contact = () => {
  // Mock data for cart items count
  const cartItemsCount = 3;

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "123 Commerce Street",
        "Tech District, CA 94105",
        "United States",
      ],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "Toll-free: 1-800-SHOPNOW"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["support@shopnow.com", "sales@shopnow.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9AM - 8PM",
        "Saturday: 10AM - 6PM",
        "Sunday: 12PM - 5PM",
      ],
    },
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      available: true,
    },
    {
      icon: Headphones,
      title: "Phone Support",
      description: "Speak directly with our customer service",
      action: "Call Now",
      available: true,
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      action: "Send Email",
      available: true,
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
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help! Reach out to us through any of the channels
            below, and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info) => {
            const IconComponent = info.icon;
            return (
              <Card key={info.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-2 p-3 bg-primary/10 rounded-full w-fit">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, index) => (
                    <p key={index} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Support Options */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            How Can We Help?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <Card
                  key={option.title}
                  className="text-center hover:shadow-md transition-shadow"
                >
                  <CardHeader>
                    <div className="mx-auto mb-2 p-3 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{option.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {option.description}
                    </p>
                    <Button
                      className="w-full"
                      variant={option.available ? "default" : "secondary"}
                      disabled={!option.available}
                    >
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-2"
                  >
                    First Name *
                  </label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium mb-2"
                  >
                    Last Name *
                  </label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone Number
                </label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject *
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="Please describe your inquiry in detail..."
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Visit Our Store</h2>
            <div className="bg-muted rounded-lg p-6 mb-6">
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <p className="text-muted-foreground">
                  Interactive Map Coming Soon
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">ShopNow Headquarters</p>
                <p className="text-muted-foreground">123 Commerce Street</p>
                <p className="text-muted-foreground">Tech District, CA 94105</p>
                <p className="text-muted-foreground">United States</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Store Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Parking</h4>
                  <p className="text-sm text-muted-foreground">
                    Free parking available in our underground garage
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Public Transport</h4>
                  <p className="text-sm text-muted-foreground">
                    Metro Station: Commerce Center (2 blocks away)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Accessibility</h4>
                  <p className="text-sm text-muted-foreground">
                    Wheelchair accessible with elevator access to all floors
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-muted p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Check out our comprehensive FAQ
            section for quick answers to common questions.
          </p>
          <Button variant="outline" size="lg">
            View FAQ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
