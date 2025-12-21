export const clients = [
  {
    id: 1,
    name: "Rahul Mehta",
    email: "rahul.mehta@email.com",
    phone: "+91 9876543210",
    projectName: "Modern Villa Residence",
    projectType: "Residential",
    status: "In Progress",
    startDate: "2024-01-15",
    progress: 65,
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 9876543211",
    projectName: "Luxury Apartment",
    projectType: "Residential",
    status: "In Progress",
    startDate: "2024-02-01",
    progress: 45,
  },
  {
    id: 3,
    name: "Amit Patel",
    email: "amit.patel@email.com",
    phone: "+91 9876543212",
    projectName: "Corporate Office Space",
    projectType: "Commercial",
    status: "Completed",
    startDate: "2023-10-15",
    progress: 100,
  },
]

export const getClientById = (id: number) => {
  return clients.find((client) => client.id === id)
}

export const getClientProgress = (clientId: number) => {
  return {
    timeline: [
      { phase: "Initial Consultation", status: "completed", date: "2024-01-15" },
      { phase: "Design Concept", status: "completed", date: "2024-01-22" },
      { phase: "Material Selection", status: "completed", date: "2024-02-05" },
      { phase: "Construction Phase", status: "in-progress", date: "2024-02-15" },
      { phase: "Final Touches", status: "pending", date: "2024-04-01" },
      { phase: "Project Handover", status: "pending", date: "2024-04-15" },
    ],
    snags: [
      { id: 1, description: "Kitchen cabinet alignment issue", status: "Resolved", reportedDate: "2024-03-01" },
      { id: 2, description: "Bathroom tile grout color mismatch", status: "In Progress", reportedDate: "2024-03-10" },
    ],
    files: [
      { id: 1, name: "Floor Plan.pdf", type: "PDF", size: "2.4 MB", uploadDate: "2024-01-22" },
      { id: 2, name: "3D Renders.zip", type: "ZIP", size: "45.2 MB", uploadDate: "2024-02-01" },
      { id: 3, name: "Material Specifications.xlsx", type: "XLSX", size: "1.2 MB", uploadDate: "2024-02-05" },
    ],
    materials: [
      { item: "Italian Marble", quantity: "500 sq ft", supplier: "Marble India Ltd", cost: "₹2,50,000" },
      { item: "Designer Tiles", quantity: "800 sq ft", supplier: "Tile World", cost: "₹1,60,000" },
      { item: "Wooden Flooring", quantity: "1200 sq ft", supplier: "Wood Masters", cost: "₹3,60,000" },
      { item: "Modular Kitchen", quantity: "1 unit", supplier: "Kitchen Kraft", cost: "₹4,50,000" },
    ],
    billing: {
      totalCost: "₹25,00,000",
      paidAmount: "₹15,00,000",
      pendingAmount: "₹10,00,000",
      nextPaymentDue: "2024-04-01",
    },
    payments: [
      { id: 1, amount: "₹5,00,000", date: "2024-01-15", method: "Bank Transfer", status: "Completed" },
      { id: 2, amount: "₹5,00,000", date: "2024-02-15", method: "Bank Transfer", status: "Completed" },
      { id: 3, amount: "₹5,00,000", date: "2024-03-15", method: "Cheque", status: "Completed" },
    ],
  }
}
