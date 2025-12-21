import { AdminSidebar } from "@/components/admin-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Briefcase, DollarSign, Clock } from "lucide-react"

const stats = [
  { title: "Total Clients", value: "24", icon: Users, color: "text-blue-600" },
  { title: "Active Projects", value: "12", icon: Briefcase, color: "text-green-600" },
  { title: "Pending Payments", value: "₹8.5L", icon: DollarSign, color: "text-orange-600" },
  { title: "Avg. Project Time", value: "4.5 mo", icon: Clock, color: "text-purple-600" },
]

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8 bg-background">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h1>
          <p className="text-muted-foreground">
            Welcome back! {"Here's"} what{"'s"} happening today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div>
                    <p className="font-medium text-foreground">New client onboarded</p>
                    <p className="text-sm text-muted-foreground">Rahul Mehta - Villa Project</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div>
                    <p className="font-medium text-foreground">Payment received</p>
                    <p className="text-sm text-muted-foreground">Priya Sharma - ₹2.5L</p>
                  </div>
                  <span className="text-sm text-muted-foreground">5 hours ago</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-foreground">Project completed</p>
                    <p className="text-sm text-muted-foreground">Amit Patel - Office Interior</p>
                  </div>
                  <span className="text-sm text-muted-foreground">1 day ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
