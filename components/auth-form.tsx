"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function AuthForm() {
  const [register, setRegister] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const router = useRouter();
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError("");
    const form = new FormData(event.currentTarget);
    const payload: Record<string, string> = { email: String(form.get("email")), password: String(form.get("password")) };
    if (register) Object.assign(payload, { name: form.get("name"), city: form.get("city"), state: form.get("state") });
    const response = await fetch(register ? "/api/auth/register" : "/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const result = await response.json();
    if (!response.ok) { setError(result.error || "Não foi possível entrar."); setBusy(false); return; }
    router.push("/painel"); router.refresh();
  }
  return <form onSubmit={submit} className="grid gap-4">
    {register && <><label className="field">Nome da ONG ou protetor(a)<input name="name" required minLength={2} /></label><div className="grid grid-cols-3 gap-3"><label className="field col-span-2">Cidade<input name="city" required /></label><label className="field">UF<input name="state" required minLength={2} maxLength={2} /></label></div></>}
    <label className="field">E-mail<input name="email" type="email" required /></label>
    <label className="field">Senha<input name="password" type="password" required minLength={register ? 10 : 1} autoComplete={register ? "new-password" : "current-password"} /></label>
    {error && <p role="alert" className="text-sm font-bold text-red-700">{error}</p>}
    <button className="btn w-full" disabled={busy}>{busy ? "Aguarde..." : register ? "Criar conta" : "Entrar no painel"}</button>
    <button type="button" className="text-sm font-bold text-forest underline" onClick={() => { setRegister(!register); setError(""); }}>{register ? "Já tenho cadastro" : "Quero cadastrar minha ONG / trabalho de proteção"}</button>
  </form>;
}
