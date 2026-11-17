
import { Suspense } from "react";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminDashboard from "@/components/admin/AdminDashboard";

async function AdminContent() {
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    return <AdminLogin />;
  }

  return <AdminDashboard />;
}

export default function AdminPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#101010] text-white">
          Cargando panel PROTEKTA...
        </main>
      }
    >
      <AdminContent />
    </Suspense>
  );
}
