import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, Package, TrendingUp, Users } from "lucide-react";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: "sale",
      title: "Organic Apples sold to Green Grocer",
      subtitle: "50kg - expires in 2 days",
      time: "2 hours ago",
      status: "completed",
      amount: "$125",
      buyer: "GG"
    },
    {
      id: 2,
      type: "request",
      title: "Fresh Bread request from Downtown Cafe",
      subtitle: "20 loaves - needed by tomorrow",
      time: "4 hours ago", 
      status: "pending",
      amount: "$60",
      buyer: "DC"
    },
    {
      id: 3,
      type: "delivery",
      title: "Dairy Products in transit",
      subtitle: "Refrigerated truck - ETA 3:30 PM",
      time: "6 hours ago",
      status: "in-transit",
      amount: "$340",
      buyer: "MB"
    },
    {
      id: 4,
      type: "listing",
      title: "Fresh Vegetables listed",
      subtitle: "Mixed produce - expires in 3 days",
      time: "1 day ago",
      status: "active",
      amount: "$85",
      buyer: "YOU"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-success text-success-foreground";
      case "pending": return "bg-warning text-warning-foreground";
      case "in-transit": return "bg-accent text-accent-foreground";
      case "active": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "sale": return TrendingUp;
      case "request": return Users;
      case "delivery": return Package;
      case "listing": return Package;
      default: return Clock;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const IconComponent = getIcon(activity.type);
            return (
              <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                <div className="p-2 bg-primary/10 rounded-full">
                  <IconComponent className="w-4 h-4 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-medium text-foreground truncate">
                      {activity.title}
                    </h4>
                    <Badge className={`text-xs ${getStatusColor(activity.status)}`}>
                      {activity.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{activity.subtitle}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-sm font-semibold text-foreground">{activity.amount}</div>
                  </div>
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                      {activity.buyer}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;