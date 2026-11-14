"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ImageUpload } from "@/components/image-upload";

type RequestItem = { id: string; name: string; email: string; message: string; type: string; status: string; createdAt: string };
export function Dashboard({ organization, pets, campaigns, requests }: { organization: { name: string; city: string; state: string; description: string; phone: string | null; imageUrl: string | null }; pets: { id: string; name: string; status: string }[]; campaigns: { id: string; title: string }[]; requests: RequestItem[] }) {
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const router = useRouter();
  async function save(event: React.FormEvent<HTMLFormElement>, url: string, method = "POST") {
    event.preventDefault(); setBusy(true); setNotice("");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    if (url === "/api/campaigns") payload.goalCents = String(Math.round(Number(payload.goalCents) * 100));
    const response = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const result = await response.json(); setNotice(response.ok ? "Salvo com sucesso!" : result.error || "Erro ao salvar."); setBusy(false);
    if (response.ok) { (event.currentTarget as HTMLFormElement).reset(); router.refresh(); }
  }
  async function logout() { await fetch("/api/auth/logout", { method: "POST" }); router.push("/"); router.refresh(); }
  async function updateRequest(id: string, status: string) { await fetch("/api/requests", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, status }) }); router.refresh(); }
  async function remove(url: string) { if (!confirm("Tem certeza que deseja excluir?")) return; await fetch(url, { method: "DELETE" }); router.refresh(); }
  return <div className="grid gap-8">
    <section className="flex flex-col justify-between gap-4 rounded-3xl bg-forest p-7 text-white sm:flex-row sm:items-center"><div><p className="text-sm text-white/70">PAINEL DA ORGANIZAÇÃO</p><h1 className="mt-2 text-3xl font-black">Olá, {organization.name} 👋</h1><p className="mt-2 text-white/75">Gerencie seus animais, campanhas e mensagens.</p></div><button onClick={logout} className="btn btn-light">Sair da conta</button></section>
    {notice && <p role="status" className="rounded-xl bg-leaf p-3 font-bold">{notice}</p>}
    <div className="grid gap-5 md:grid-cols-2">
      <form onSubmit={(e) => save(e, "/api/organizations/me", "PATCH")} className="card grid gap-4 p-6"><h2 className="text-xl font-black">Meu perfil</h2>
        <label className="field">Nome<input name="name" defaultValue={organization.name} required /></label>
        <div className="grid grid-cols-3 gap-3"><label className="field col-span-2">Cidade<input name="city" defaultValue={organization.city} required /></label><label className="field">UF<input name="state" defaultValue={organization.state} required maxLength={2} /></label></div>
        <label className="field">Telefone<input name="phone" defaultValue={organization.phone || ""} /></label>
        <label className="field">Descrição<textarea name="description" defaultValue={organization.description} minLength={20} required /></label>
        <ImageUpload defaultValue={organization.imageUrl || ""} />
        <button className="btn" disabled={busy}>Salvar perfil</button>
      </form>
      <div className="grid content-start gap-5">
        <form onSubmit={(e) => save(e, "/api/pets")} className="card grid gap-4 p-6"><h2 className="text-xl font-black">Cadastrar animal</h2>
          <div className="grid grid-cols-2 gap-3"><label className="field">Nome<input name="name" required /></label><label className="field">Espécie<input name="species" placeholder="Cachorro / Gato" required /></label>
            <label className="field">Raça<input name="breed" /></label><label className="field">Idade<input name="age" placeholder="2 anos" required /></label>
            <label className="field">Sexo<input name="sex" placeholder="Fêmea / Macho" required /></label><label className="field">Porte<input name="size" placeholder="Pequeno / Médio / Grande" required /></label>
            <label className="field">Cidade<input name="city" defaultValue={organization.city} required /></label><label className="field">UF<input name="state" defaultValue={organization.state} required maxLength={2} /></label></div>
          <ImageUpload /><label className="field">Sobre o animal<textarea name="description" minLength={20} required /></label>
          <button className="btn" disabled={busy}>Adicionar para adoção</button>
        </form>
        <form onSubmit={(e) => save(e, "/api/campaigns")} className="card grid gap-4 p-6"><h2 className="text-xl font-black">Nova campanha</h2>
          <label className="field">Título<input name="title" required minLength={4} /></label><label className="field">Meta (R$)<input name="goalCents" type="number" step=".01" min=".01" required /></label>
          <label className="field">Instruções para doação<textarea name="donationInstructions" required minLength={5} placeholder="Chave PIX, dados bancários ou como ajudar..." /></label><label className="field">Descrição<textarea name="description" required minLength={20} /></label>
          <ImageUpload /><label className="field">Encerramento<input name="endsAt" type="date" /></label><button className="btn" disabled={busy}>Publicar campanha</button>
        </form>
      </div>
    </div>
    <section className="card p-6"><h2 className="mb-4 text-xl font-black">Animais publicados ({pets.length})</h2>{pets.length ? <div className="divide-y">{pets.map(p => <div key={p.id} className="flex items-center justify-between py-3"><span><b>{p.name}</b> <span className="pill ml-2">{p.status === "AVAILABLE" ? "Disponível" : p.status}</span></span><button className="text-sm font-bold text-red-700" onClick={() => remove(`/api/pets/${p.id}`)}>Excluir</button></div>)}</div> : <p className="muted">Seus animais cadastrados aparecerão aqui.</p>}</section>
    <section className="card p-6"><h2 className="mb-4 text-xl font-black">Campanhas ({campaigns.length})</h2>{campaigns.length ? campaigns.map(c => <div key={c.id} className="flex items-center justify-between border-t py-3"><b>{c.title}</b><button className="text-sm font-bold text-red-700" onClick={() => remove(`/api/campaigns/${c.id}`)}>Excluir</button></div>) : <p className="muted">Suas campanhas aparecerão aqui.</p>}</section>
    <section className="card p-6"><h2 className="mb-4 text-xl font-black">Mensagens recebidas ({requests.length})</h2>{requests.length ? requests.map(r => <article key={r.id} className="border-t py-4"><div className="flex flex-wrap justify-between gap-2"><b>{r.name} · {r.email}</b><select className="rounded-lg border p-1 text-sm" value={r.status} onChange={(e) => updateRequest(r.id, e.target.value)}><option value="NEW">Nova</option><option value="IN_PROGRESS">Em andamento</option><option value="CLOSED">Concluída</option></select></div><p className="mt-2 text-sm text-[#66766e]">{r.message}</p><p className="mt-1 text-xs text-[#66766e]">{r.type} · {new Date(r.createdAt).toLocaleDateString("pt-BR")}</p></article>) : <p className="muted">Quando alguém entrar em contato, a mensagem será exibida aqui.</p>}</section>
  </div>;
}
