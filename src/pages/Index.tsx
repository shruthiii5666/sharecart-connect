import Navbar from "@/components/Navbar";
import OverviewCards from "@/components/OverviewCards";
import RecentActivity from "@/components/RecentActivity";
import QuickActions from "@/components/QuickActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Welcome to ShareCart
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with retailers, reduce food waste, and build a sustainable marketplace community
            </p>
          </div>
        </div>

        {/* Overview Cards */}
        <OverviewCards />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity - Takes 2 columns */}
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>
          
          {/* Quick Actions - Takes 1 column */}
          <div className="lg:col-span-1">
            <QuickActions />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
