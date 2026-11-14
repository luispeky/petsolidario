"use client";
import { useState } from "react";

export function ImageUpload({ name = "imageUrl", defaultValue = "" }: { name?: string; defaultValue?: string }) {
  const [url, setUrl] = useState(defaultValue);
  const [status, setStatus] = useState("");
  async function upload(file?: File) {
    if (!file) return;
    setStatus("Enviando imagem...");
    const form = new FormData(); form.set("file", file);
    const response = await fetch("/api/upload", { method: "POST", body: form });
    const result = await response.json();
    if (!response.ok) { setStatus(result.error || "Falha no envio."); return; }
    setUrl(result.url); setStatus("Imagem enviada.");
  }
  return <div className="field"><span>Imagem (opcional)</span><input type="hidden" name={name} value={url} />
    <input type="file" accept="image/jpeg,image/png,image/webp" onChange={(e) => upload(e.target.files?.[0])} className="!p-2 text-sm" />
    {url && <input aria-label="URL da imagem" type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Ou cole uma URL de imagem" />}
    {!url && <input aria-label="URL da imagem" type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Ou cole uma URL de imagem" />}
    {status && <span className="text-xs font-medium text-forest">{status}</span>}<span className="text-xs font-normal text-[#66766e]">JPG, PNG ou WebP · até 5 MB</span></div>;
}
