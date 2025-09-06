import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, Truck, BarChart3, MessageSquare, Settings } from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      title: "List New Surplus",
      description: "Add products to marketplace",
      icon: Plus,
      variant: "default" as const,
      className: "bg-primary text-primary-foreground"
    },
    {
      title: "Browse Marketplace",
      description: "Find surplus near you",
      icon: Search,
      variant: "outline" as const,
      className: ""
    },
    {
      title: "Schedule Pickup",
      description: "Arrange transportation",
      icon: Truck,
      variant: "outline" as const,
      className: ""
    },
    {
      title: "View Analytics",
      description: "Track your performance",
      icon: BarChart3,
      variant: "outline" as const,
      className: ""
    },
    {
      title: "Contact Support",
      description: "Get help when needed",
      icon: MessageSquare,
      variant: "outline" as const,
      className: ""
    },
    {
      title: "Account Settings",
      description: "Manage your profile",
      icon: Settings,
      variant: "outline" as const,
      className: ""
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="w-5 h-5 text-primary" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              className={`h-auto p-4 flex flex-col items-start gap-2 hover:shadow-md transition-all ${action.className}`}
            >
              <div className="flex items-center gap-2 w-full">
                <action.icon className="w-4 h-4" />
                <span className="font-medium text-sm">{action.title}</span>
              </div>
              <span className="text-xs opacity-80 text-left">
                {action.description}
              </span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;