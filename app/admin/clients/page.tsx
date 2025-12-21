import { AdminSidebar } from "@/components/admin-sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { clients } from "@/lib/data"
import Link from "next/link"

export default function ClientsPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8 bg-background">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Clients</h1>
          <p className="text-muted-foreground">Manage all your clients and their projects</p>
        </div>

        <div className="grid gap-6">
          {clients.map((client) => (
            <Link key={client.id} href={`/admin/clients/${client.id}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">{client.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{client.projectName}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{client.projectType}</Badge>
                        <Badge variant={client.status === "Completed" ? "default" : "secondary"}>{client.status}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-1">Progress</p>
                      <p className="text-2xl font-bold text-primary">{client.progress}%</p>
                    </div>
                  </div>
                  <div className="mt-4 bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${client.progress}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
