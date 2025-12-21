"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { getClientById, getClientProgress } from "@/lib/data"
import { ArrowLeft, Upload, Download, CheckCircle, Clock, AlertCircle, FileText, ImageIcon, Video } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ClientDetailPage({ params }: { params: { id: string } }) {
  const client = getClientById(Number.parseInt(params.id))
  const progress = getClientProgress(Number.parseInt(params.id))
  const [internalNotes, setInternalNotes] = useState(
    "Client prefers minimal design. Weekly updates scheduled for Fridays.",
  )

  if (!client) {
    return <div>Client not found</div>
  }

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <Link href="/admin/clients" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Clients
        </Link>

        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{client.name}</h1>
              <p className="text-lg text-muted-foreground">{client.projectName}</p>
            </div>
            <Badge variant={client.status === "Completed" ? "default" : "secondary"} className="text-base px-4 py-2">
              {client.status}
            </Badge>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span>{client.email}</span>
            <span>{client.phone}</span>
            <span>Start Date: {client.startDate}</span>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-9 gap-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="updates">Site Updates</TabsTrigger>
            <TabsTrigger value="snags">Snags</TabsTrigger>
            <TabsTrigger value="files">Design Files</TabsTrigger>
            <TabsTrigger value="materials">Materials</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="notes">Internal Notes</TabsTrigger>
          </TabsList>

          {/* Project Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-1">Project Type</p>
                  <p className="text-xl font-semibold text-foreground">{client.projectType}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-1">Overall Progress</p>
                  <p className="text-xl font-semibold text-primary">{client.progress}%</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-1">Start Date</p>
                  <p className="text-xl font-semibold text-foreground">{client.startDate}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-1">Status</p>
                  <Badge variant={client.status === "Completed" ? "default" : "secondary"} className="text-base">
                    {client.status}
                  </Badge>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Client Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name</span>
                  <span className="font-medium text-foreground">{client.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email</span>
                  <span className="font-medium text-foreground">{client.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phone</span>
                  <span className="font-medium text-foreground">{client.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Project</span>
                  <span className="font-medium text-foreground">{client.projectName}</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Work Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Project Timeline & Milestones</CardTitle>
                <Button size="sm">Add Milestone</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {progress.timeline.map((phase, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted flex-shrink-0">
                        {phase.status === "completed" && <CheckCircle className="w-6 h-6 text-green-600" />}
                        {phase.status === "in-progress" && <Clock className="w-6 h-6 text-blue-600" />}
                        {phase.status === "pending" && <AlertCircle className="w-6 h-6 text-muted-foreground" />}
                      </div>
                      <div className="flex-1 pt-2">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold text-foreground">{phase.phase}</p>
                          <Badge variant={phase.status === "completed" ? "default" : "secondary"}>{phase.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{phase.date}</p>
                        {phase.status === "in-progress" && (
                          <div className="mt-3">
                            <div className="bg-muted rounded-full h-2">
                              <div className="bg-primary h-2 rounded-full" style={{ width: "60%" }} />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Site Updates Tab */}
          <TabsContent value="updates" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Site Progress Updates</CardTitle>
                <Button size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Media
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Timeline layout for site updates */}
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <ImageIcon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="w-0.5 h-full bg-border mt-2" />
                      </div>
                      <div className="flex-1 pb-6">
                        <p className="text-sm text-muted-foreground mb-2">March 15, 2024</p>
                        <p className="font-medium text-foreground mb-3">Kitchen Installation Complete</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                            <img
                              src="/placeholder.svg?height=200&width=300"
                              alt="Site update"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                            <img
                              src="/placeholder.svg?height=200&width=300"
                              alt="Site update"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Video className="w-5 h-5 text-primary" />
                        </div>
                        <div className="w-0.5 h-full bg-border mt-2" />
                      </div>
                      <div className="flex-1 pb-6">
                        <p className="text-sm text-muted-foreground mb-2">March 10, 2024</p>
                        <p className="font-medium text-foreground mb-3">Flooring Work Progress</p>
                        <div className="aspect-video bg-muted rounded-lg overflow-hidden max-w-md">
                          <div className="w-full h-full flex items-center justify-center">
                            <Video className="w-12 h-12 text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <ImageIcon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-2">March 5, 2024</p>
                        <p className="font-medium text-foreground mb-3">Wall Painting Started</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                            <img
                              src="/placeholder.svg?height=200&width=300"
                              alt="Site update"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Snags / Issues Tab */}
          <TabsContent value="snags" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Snags / Issues</CardTitle>
                <Button size="sm">Add Snag</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {progress.snags.map((snag) => (
                    <Card key={snag.id} className="border-l-4 border-l-orange-500">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <p className="font-semibold text-foreground">{snag.description}</p>
                          <Badge variant={snag.status === "Resolved" ? "default" : "secondary"}>{snag.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Reported: {snag.reportedDate}</p>
                        {snag.status === "In Progress" && (
                          <div className="mt-3 flex gap-2">
                            <Button size="sm" variant="outline">
                              Mark as Resolved
                            </Button>
                            <Button size="sm" variant="ghost">
                              Add Update
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Design Files Tab */}
          <TabsContent value="files" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Design Files & Documents</CardTitle>
                <Button size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Files
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {progress.files.map((file) => (
                    <Card key={file.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileText className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-foreground truncate">{file.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {file.size} • {file.uploadDate}
                            </p>
                            <div className="flex gap-2 mt-3">
                              <Button size="sm" variant="outline">
                                <Download className="w-4 h-4 mr-1" />
                                Download
                              </Button>
                              <Button size="sm" variant="ghost">
                                Preview
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Materials Used Tab */}
          <TabsContent value="materials" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Materials & Warranty Documents</CardTitle>
                <Button size="sm">Add Material</Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Material Name</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Quantity</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Brand/Supplier</th>
                        <th className="text-right py-3 px-4 font-semibold text-foreground">Cost</th>
                        <th className="text-center py-3 px-4 font-semibold text-foreground">Warranty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {progress.materials.map((material, index) => (
                        <tr key={index} className="border-b border-border hover:bg-muted/50">
                          <td className="py-4 px-4 font-medium text-foreground">{material.item}</td>
                          <td className="py-4 px-4 text-muted-foreground">{material.quantity}</td>
                          <td className="py-4 px-4 text-muted-foreground">{material.supplier}</td>
                          <td className="py-4 px-4 text-right font-semibold text-foreground">{material.cost}</td>
                          <td className="py-4 px-4 text-center">
                            <Button size="sm" variant="ghost">
                              <Download className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 border-border">
                        <td colSpan={3} className="py-4 px-4 font-semibold text-foreground">
                          Total Material Cost
                        </td>
                        <td className="py-4 px-4 text-right font-bold text-primary">₹12,20,000</td>
                        <td></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Cost Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <div>
                      <p className="font-medium text-foreground">Design & Consultation</p>
                      <p className="text-sm text-muted-foreground">Architectural plans, 3D renders, consultations</p>
                    </div>
                    <p className="text-lg font-semibold text-foreground">₹3,00,000</p>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <div>
                      <p className="font-medium text-foreground">Materials</p>
                      <p className="text-sm text-muted-foreground">All materials and fixtures</p>
                    </div>
                    <p className="text-lg font-semibold text-foreground">₹12,20,000</p>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <div>
                      <p className="font-medium text-foreground">Labour & Execution</p>
                      <p className="text-sm text-muted-foreground">Construction and installation</p>
                    </div>
                    <p className="text-lg font-semibold text-foreground">₹7,80,000</p>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <p className="font-medium text-foreground">Subtotal</p>
                    <p className="text-lg font-semibold text-foreground">₹23,00,000</p>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <p className="font-medium text-foreground">GST (18%)</p>
                    <p className="text-lg font-semibold text-foreground">₹4,14,000</p>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-primary/5 rounded-lg px-4">
                    <p className="text-lg font-bold text-foreground">Grand Total</p>
                    <p className="text-2xl font-bold text-primary">{progress.billing.totalCost}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 bg-green-50/50">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-1">Paid Amount</p>
                  <p className="text-2xl font-bold text-green-600">{progress.billing.paidAmount}</p>
                </CardContent>
              </Card>
              <Card className="border-orange-200 bg-orange-50/50">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-1">Pending Amount</p>
                  <p className="text-2xl font-bold text-orange-600">{progress.billing.pendingAmount}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-1">Next Payment Due</p>
                  <p className="text-xl font-semibold text-foreground">{progress.billing.nextPaymentDue}</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Payment History</CardTitle>
                <Button size="sm">Record Payment</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {progress.payments.map((payment) => (
                    <Card key={payment.id} className="border-l-4 border-l-green-500">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xl font-bold text-foreground mb-1">{payment.amount}</p>
                            <p className="text-sm text-muted-foreground">
                              {payment.date} • {payment.method}
                            </p>
                          </div>
                          <div className="text-right">
                            <Badge className="mb-2">{payment.status}</Badge>
                            <div className="flex gap-2">
                              <Button size="sm" variant="ghost">
                                <Download className="w-4 h-4 mr-1" />
                                Receipt
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Internal Notes Tab */}
          <TabsContent value="notes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Internal Notes (Admin Only)</CardTitle>
                <p className="text-sm text-muted-foreground">These notes are not visible to the client</p>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={internalNotes}
                  onChange={(e) => setInternalNotes(e.target.value)}
                  placeholder="Add internal notes about the project, client preferences, team communications..."
                  rows={10}
                  className="mb-4"
                />
                <Button>Save Notes</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
