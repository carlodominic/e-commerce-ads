import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  category: string;
}

interface ProductGridProps {
  products?: Product[];
  categories?: string[];
}

const ProductGrid = ({
  products = [
    {
      id: "1",
      title: "Wireless Noise-Cancelling Headphones",
      price: 199.99,
      originalPrice: 249.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      rating: 4.5,
      category: "Electronics",
    },
    {
      id: "2",
      title: "Smart Fitness Watch",
      price: 149.99,
      originalPrice: 179.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      rating: 4.2,
      category: "Wearables",
    },
    {
      id: "3",
      title: "Portable Bluetooth Speaker",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
      rating: 4.0,
      category: "Electronics",
    },
    {
      id: "4",
      title: "Ergonomic Office Chair",
      price: 249.99,
      originalPrice: 299.99,
      image:
        "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=500&q=80",
      rating: 4.7,
      category: "Furniture",
    },
    {
      id: "5",
      title: "Ultra HD Smart TV",
      price: 599.99,
      originalPrice: 699.99,
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&q=80",
      rating: 4.8,
      category: "Electronics",
    },
    {
      id: "6",
      title: "Stainless Steel Water Bottle",
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80",
      rating: 4.3,
      category: "Lifestyle",
    },
  ],
  categories = ["All", "Electronics", "Wearables", "Furniture", "Lifestyle"],
}: ProductGridProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  // Filter products based on active filters
  const filteredProducts = products.filter((product) => {
    // Filter by category
    if (activeCategory !== "All" && product.category !== activeCategory) {
      return false;
    }

    // Filter by price range
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }

    // Filter by search query
    if (
      searchQuery &&
      !product.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default: // featured or any other option
        return 0; // maintain original order
    }
  });

  return (
    <div className="w-full bg-white py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-6">
          {/* Header with search and filter controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-2xl font-bold">Featured Products</h2>

            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
              <div className="relative w-full sm:w-64">
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-8"
                />
                <Search className="absolute right-2 top-2.5 h-4 w-4 text-gray-400" />
              </div>

              <div className="flex gap-2">
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="rating">Top Rated</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setShowFilters(!showFilters)}
                  className="md:hidden"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Filters sidebar - visible on desktop or when toggled on mobile */}
            <div
              className={`${showFilters ? "block" : "hidden"} md:block bg-gray-50 p-4 rounded-lg`}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Categories</h3>
                  <Tabs
                    defaultValue={activeCategory}
                    onValueChange={setActiveCategory}
                    orientation="vertical"
                  >
                    <TabsList className="flex flex-col h-auto bg-transparent space-y-1">
                      {categories.map((category) => (
                        <TabsTrigger
                          key={category}
                          value={category}
                          className="justify-start w-full"
                        >
                          {category}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={priceRange}
                      min={0}
                      max={1000}
                      step={10}
                      onValueChange={setPriceRange}
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product grid */}
            <div className="col-span-1 md:col-span-3">
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      image={product.image}
                      rating={product.rating}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <p className="text-gray-500 mb-4">
                    No products match your current filters
                  </p>
                  <Button
                    onClick={() => {
                      setActiveCategory("All");
                      setPriceRange([0, 1000]);
                      setSearchQuery("");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
