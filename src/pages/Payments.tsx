import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Plus, DollarSign, Wallet } from "lucide-react";

const Payments = () => {
  const paymentMethods = [
    { id: 1, type: "Credit Card", details: "**** **** **** 1234", provider: "Visa", isDefault: true }
  ];

  const recentPayments = [
    { id: "PAY001", date: "2024-12-06", amount: "$170.00", description: "Organic Apples + Transport", status: "completed" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-success text-success-foreground";
      case "pending": return "bg-warning text-warning-foreground";
      case "failed": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Payments</h1>
            <p className="text-muted-foreground">Manage payment methods and view payment history</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Payment Method
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="p-4 border rounded-lg flex items-center justify-between">
                    <div>
                      <div className="font-medium">{method.type}</div>
                      <div className="text-sm text-muted-foreground">{method.details}</div>
                    </div>
                    <Badge className="bg-primary text-primary-foreground text-xs">Default</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                Recent Payments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPayments.map((payment) => (
                  <div key={payment.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium">{payment.description}</div>
                        <div className="text-sm text-muted-foreground">{payment.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{payment.amount}</div>
                        <Badge className={`${getStatusColor(payment.status)} text-xs`}>
                          {payment.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Payments;