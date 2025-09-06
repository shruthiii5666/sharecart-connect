import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Package, Edit, Trash2, Eye } from "lucide-react";

const MySurplus = () => {
  const listings = [
    { id: 1, product: "Organic Apples", category: "Fruits", quantity: "50kg", price: "$125", expiry: "2024-12-08", location: "Warehouse A, Zone 3", status: "available", views: 45, inquiries: 8 },
    { id: 2, product: "Fresh Bread Mix", category: "Bakery", quantity: "30 units", price: "$45", expiry: "2024-12-07", location: "Store Front, Display", status: "sold", views: 23, inquiries: 12 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available": return "bg-success text-success-foreground";
      case "sold": return "bg-muted text-muted-foreground";
      case "expired": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">My Surplus</h1>
            <p className="text-muted-foreground">Manage your surplus inventory and listings</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add New Listing
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Add Surplus Item
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="product-name">Product Name</Label>
                  <Input id="product-name" placeholder="e.g., Organic Apples" />
                </div>
                <Button className="w-full">List Product</Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Current Listings</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {listings.map((listing) => (
                      <TableRow key={listing.id}>
                        <TableCell>
                          <div className="font-medium">{listing.product}</div>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getStatusColor(listing.status)} text-xs`}>
                            {listing.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            <Edit className="w-3 h-3" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySurplus;