import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, MapPin, Clock, DollarSign, CheckCircle } from "lucide-react";

const Logistics = () => {
  const transportOptions = [
    {
      id: 1,
      type: "Small Van",
      capacity: "Up to 500kg",
      price: "$45",
      duration: "2-4 hours",
      features: ["Local delivery", "Quick turnaround", "Eco-friendly"],
      available: true
    },
    {
      id: 2,
      type: "Medium Truck", 
      capacity: "Up to 2000kg",
      price: "$120",
      duration: "4-8 hours",
      features: ["Regional delivery", "Bulk capacity", "Professional driver"],
      available: true
    },
    {
      id: 3,
      type: "Refrigerated Truck",
      capacity: "Up to 1500kg",
      price: "$180",
      duration: "3-6 hours", 
      features: ["Temperature controlled", "Fresh produce", "Cold chain certified"],
      available: false
    }
  ];

  const activeDeliveries = [
    {
      id: "DEL001",
      from: "Green Valley Farm",
      to: "Downtown Market",
      product: "Organic Apples - 50kg",
      driver: "Mike Johnson",
      vehicle: "Small Van",
      status: "in-transit",
      progress: 65,
      eta: "2:30 PM",
      currentLocation: "Highway 101, Mile 15"
    },
    {
      id: "DEL002", 
      from: "Fresh Dairy Co",
      to: "Corner Store",
      product: "Dairy Products - 25kg",
      driver: "Sarah Chen",
      vehicle: "Refrigerated Truck",
      status: "pickup",
      progress: 25,
      eta: "4:15 PM",
      currentLocation: "Loading at warehouse"
    },
    {
      id: "DEL003",
      from: "Downtown Bakery",
      to: "Food Hub Central",
      product: "Bread Assortment - 30 units",
      driver: "Alex Rodriguez",
      vehicle: "Small Van", 
      status: "delivered",
      progress: 100,
      eta: "Delivered",
      currentLocation: "Delivery completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-success text-success-foreground";
      case "in-transit": return "bg-accent text-accent-foreground";
      case "pickup": return "bg-warning text-warning-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Logistics</h1>
          <p className="text-muted-foreground">Manage transportation and track deliveries</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Transportation Options */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-primary" />
                  Transportation Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transportOptions.map((option) => (
                    <div 
                      key={option.id}
                      className={`p-4 border rounded-lg transition-all ${
                        option.available 
                          ? 'hover:shadow-md cursor-pointer border-border' 
                          : 'opacity-60 border-muted'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-foreground">{option.type}</h3>
                          <p className="text-sm text-muted-foreground">{option.capacity}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">{option.price}</div>
                          <div className="text-xs text-muted-foreground">{option.duration}</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {option.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button 
                        className="w-full" 
                        disabled={!option.available}
                        variant={option.available ? "default" : "outline"}
                      >
                        {option.available ? "Select Vehicle" : "Currently Unavailable"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">14</div>
                  <div className="text-sm text-muted-foreground">Active Deliveries</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-success">89%</div>
                  <div className="text-sm text-muted-foreground">On-Time Rate</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Live Tracking */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Live Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeDeliveries.map((delivery) => (
                    <div key={delivery.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="font-semibold text-foreground">#{delivery.id}</div>
                          <div className="text-sm text-muted-foreground">{delivery.product}</div>
                        </div>
                        <Badge className={`${getStatusColor(delivery.status)} text-xs`}>
                          {delivery.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-medium">From:</span>
                          <span className="text-muted-foreground">{delivery.from}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-medium">To:</span>
                          <span className="text-muted-foreground">{delivery.to}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-medium">Driver:</span>
                          <span className="text-muted-foreground">{delivery.driver}</span>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span>{delivery.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary rounded-full h-2 transition-all duration-300"
                            style={{ width: `${delivery.progress}%` }}
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          ETA: {delivery.eta}
                        </div>
                        <Button variant="outline" size="sm">
                          Track Live
                        </Button>
                      </div>
                      
                      <div className="mt-2 text-xs text-muted-foreground">
                        📍 {delivery.currentLocation}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logistics;