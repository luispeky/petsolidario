import { BlobServiceClient } from "@azure/storage-blob";
import { randomUUID } from "crypto";

export async function storeImage(file: File): Promise<string> {
  const allowed = new Set(["image/jpeg", "image/png", "image/webp"]);
  if (!allowed.has(file.type)) throw new Error("Formato de imagem inválido. Use JPG, PNG ou WebP.");
  if (file.size < 1 || file.size > 5 * 1024 * 1024) throw new Error("A imagem deve ter até 5 MB.");
  const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
  if (!connectionString) throw new Error("Configure AZURE_STORAGE_CONNECTION_STRING.");
  const service = BlobServiceClient.fromConnectionString(connectionString);
  const containerName = process.env.AZURE_STORAGE_CONTAINER || "pet-media";
  const container = service.getContainerClient(containerName);
  await container.createIfNotExists();
  const extension = file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg";
  const blob = container.getBlockBlobClient(`${randomUUID()}.${extension}`);
  await blob.uploadData(Buffer.from(await file.arrayBuffer()), {
    blobHTTPHeaders: { blobContentType: file.type },
  });
  const base = process.env.AZURE_BLOB_PUBLIC_BASE_URL?.replace(/\/$/, "");
  return base ? `${base}/${blob.name}` : blob.url;
}
