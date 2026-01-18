import { requireAuth } from "@/lib/requireAuth";

export default async function DashboardPage() {
  const user = await requireAuth();

  return (
    <div className="min-h-screen p-6 bg-zinc-950 text-zinc-50">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-zinc-400">
        Usuário logado: {user.email}
      </p>
    </div>
  );
}
