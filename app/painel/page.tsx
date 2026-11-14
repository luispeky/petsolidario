import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { getSessionOrganization } from "@/lib/auth";
import { Dashboard } from "@/components/dashboard";
export const dynamic = "force-dynamic";
export default async function DashboardPage() {
  const org = await getSessionOrganization();
  if (!org) redirect("/login");
  const [organization, pets, campaigns, requests] = await Promise.all([
    db.organization.findUniqueOrThrow({ where: { id: org.id }, select: { name: true, city: true, state: true, description: true, phone: true, imageUrl: true } }),
    db.pet.findMany({ where: { organizationId: org.id }, select: { id: true, name: true, status: true }, orderBy: { createdAt: "desc" } }),
    db.campaign.findMany({ where: { organizationId: org.id }, select: { id: true, title: true }, orderBy: { createdAt: "desc" } }),
    db.contactRequest.findMany({ where: { organizationId: org.id }, orderBy: { createdAt: "desc" } }),
  ]);
  return <section className="container section"><Dashboard organization={organization} pets={pets} campaigns={campaigns} requests={requests.map(request => ({ ...request, createdAt: request.createdAt.toISOString() }))} /></section>;
}
