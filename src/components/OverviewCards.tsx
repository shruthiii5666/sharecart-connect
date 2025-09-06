import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ShoppingBag, Truck, TrendingUp, Clock, Package } from "lucide-react";

const OverviewCards = () => {
  const cards = [
    {
      title: "Available Surplus Near You",
      value: "248",
      subtitle: "Products within 25km",
      icon: MapPin,
      trend: "+12% this week",
      action: "Browse Now",
      color: "text-primary"
    },
    {
      title: "Requests from Retailers",
      value: "32",
      subtitle: "Active purchase requests",
      icon: ShoppingBag,
      trend: "+5 new today",
      action: "View Requests",
      color: "text-accent"
    },
    {
      title: "Active Deliveries",
      value: "14",
      subtitle: "Currently in transit",
      icon: Truck,
      trend: "3 arriving today",
      action: "Track All",
      color: "text-warning"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {cards.map((card, index) => (
        <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {card.title}
            </CardTitle>
            <card.icon className={`w-5 h-5 ${card.color}`} />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-2xl font-bold text-foreground">{card.value}</div>
                <p className="text-xs text-muted-foreground">{card.subtitle}</p>
              </div>
              <div className="text-right">
                <div className="text-xs text-success font-medium">{card.trend}</div>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            >
              {card.action}
            </Button>
          </CardContent>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Card>
      ))}
    </div>
  );
};

export default OverviewCards;