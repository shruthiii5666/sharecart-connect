import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MapPin, Clock, Star } from "lucide-react";

const Marketplace = () => {
  const products = [
    {
      id: 1,
      name: "Organic Apples",
      category: "Fruits",
      quantity: "50kg",
      price: "$125",
      expiry: "2 days",
      distance: "5.2km",
      retailer: "Green Valley Farm",
      rating: 4.8,
      status: "available"
    },
    {
      id: 2,
      name: "Fresh Bread Loaves",
      category: "Bakery",
      quantity: "30 units",
      price: "$45",
      expiry: "1 day",
      distance: "2.1km",
      retailer: "Downtown Bakery",
      rating: 4.9,
      status: "available"
    },
    {
      id: 3,
      name: "Dairy Products Mix",
      category: "Dairy",
      quantity: "25kg",
      price: "$180",
      expiry: "3 days",
      distance: "8.7km",
      retailer: "Fresh Dairy Co",
      rating: 4.6,
      status: "limited"
    },
    {
      id: 4,
      name: "Mixed Vegetables",
      category: "Vegetables",
      quantity: "40kg",
      price: "$85",
      expiry: "2 days",
      distance: "3.5km",
      retailer: "Organic Gardens",
      rating: 4.7,
      status: "available"
    },
    {
      id: 5,
      name: "Frozen Meat Products",
      category: "Meat",
      quantity: "15kg",
      price: "$220",
      expiry: "7 days",
      distance: "12.3km",
      retailer: "Premium Meats",
      rating: 4.9,
      status: "available"
    },
    {
      id: 6,
      name: "Canned Goods Variety",
      category: "Pantry",
      quantity: "100 units",
      price: "$160",
      expiry: "30 days",
      distance: "6.8km",
      retailer: "Wholesale Foods",
      rating: 4.5,
      status: "available"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available": return "bg-success text-success-foreground";
      case "limited": return "bg-warning text-warning-foreground";
      case "sold": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Marketplace</h1>
          <p className="text-muted-foreground">Browse available surplus products from retailers near you</p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search products..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="fruits">Fruits</SelectItem>
                  <SelectItem value="vegetables">Vegetables</SelectItem>
                  <SelectItem value="dairy">Dairy</SelectItem>
                  <SelectItem value="bakery">Bakery</SelectItem>
                  <SelectItem value="meat">Meat</SelectItem>
                  <SelectItem value="pantry">Pantry</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Expiry Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Time</SelectItem>
                  <SelectItem value="1day">Within 1 day</SelectItem>
                  <SelectItem value="3days">Within 3 days</SelectItem>
                  <SelectItem value="1week">Within 1 week</SelectItem>
                  <SelectItem value="1month">Within 1 month</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Distance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Distance</SelectItem>
                  <SelectItem value="5km">Within 5km</SelectItem>
                  <SelectItem value="10km">Within 10km</SelectItem>
                  <SelectItem value="25km">Within 25km</SelectItem>
                  <SelectItem value="50km">Within 50km</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </div>
                  <Badge className={`${getStatusColor(product.status)} text-xs`}>
                    {product.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground">{product.quantity}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {product.expiry}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {product.distance}
                    </div>
                  </div>
                  
                  <div className="border-t pt-3">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">{product.retailer}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{product.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        Request/Buy
                      </Button>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;