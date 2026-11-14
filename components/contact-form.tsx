"use client";
import { useState } from "react";

export function ContactForm({ petId, organizationId, organizations }: { petId?: string; organizationId?: string; organizations?: { id: string; name: string }[] }) {
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setMessage("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/requests", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({
      name: form.get("name"), email: form.get("email"), phone: form.get("phone"), message: form.get("message"),
      type: form.get("type"), petId, organizationId: organizationId || String(form.get("organizationId") || "") || undefined,
    }) });
    const result = await response.json(); setMessage(result.message || result.error);
    if (response.ok) event.currentTarget.reset();
    setBusy(false);
  }
  return <form onSubmit={submit} className="grid gap-4">
    <label className="field">Seu nome<input name="name" required minLength={2} placeholder="Como podemos te chamar?" /></label>
    <div className="grid gap-4 sm:grid-cols-2"><label className="field">E-mail<input type="email" name="email" required placeholder="voce@email.com" /></label><label className="field">Telefone (opcional)<input name="phone" placeholder="(11) 99999-9999" /></label></div>
    {organizations && <label className="field">Organização<select name="organizationId" required defaultValue=""><option value="" disabled>Selecione uma organização</option>{organizations.map(org => <option key={org.id} value={org.id}>{org.name}</option>)}</select></label>}
    <label className="field">Quero...<select name="type"><option value={petId ? "ADOPTION" : "CONTACT"}>{petId ? "saber sobre adoção" : "entrar em contato"}</option><option value="VOLUNTEER">ser voluntário(a)</option></select></label>
    <label className="field">Mensagem<textarea name="message" required minLength={10} placeholder="Escreva sua mensagem..." /></label>
    <button className="btn w-full" disabled={busy}>{busy ? "Enviando..." : "Enviar mensagem →"}</button>
    {message && <p role="status" className="text-sm font-bold text-forest">{message}</p>}
  </form>;
}
