import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id?: string;
  image?: string;
  title?: string;
  price?: number;
  originalPrice?: number;
  rating?: number;
  discount?: number;
  isNew?: boolean;
  onAddToCart?: (id: string) => void;
}

const ProductCard = ({
  id = "1",
  image = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
  title = "Premium Wireless Headphones",
  price = 129.99,
  originalPrice = 159.99,
  rating = 4.5,
  discount = 20,
  isNew = false,
  onAddToCart = () => {},
}: ProductCardProps) => {
  const hasDiscount = originalPrice > price;

  return (
    <Card className="w-full max-w-[300px] overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      <div className="relative h-[200px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {hasDiscount && (
          <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">
            {discount}% OFF
          </Badge>
        )}
        {isNew && (
          <Badge className="absolute top-2 left-2 bg-blue-500 hover:bg-blue-600">
            NEW
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="font-medium text-lg mb-1 line-clamp-2">{title}</h3>

        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} ${i === Math.floor(rating) && rating % 1 > 0 ? "text-yellow-400 fill-yellow-400 opacity-50" : ""}`}
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">{rating}</span>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center">
            <span className="font-bold text-lg">${price.toFixed(2)}</span>
            {hasDiscount && (
              <span className="text-gray-400 text-sm line-through ml-2">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <Button
            size="sm"
            onClick={() => onAddToCart(id)}
            className="rounded-full"
          >
            <ShoppingCart size={16} className="mr-1" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
