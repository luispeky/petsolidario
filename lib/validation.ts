import { z } from "zod";

export const petSchema = z.object({
  name: z.string().trim().min(2).max(80),
  species: z.string().trim().min(2).max(40),
  breed: z.string().trim().max(80).optional().nullable(),
  age: z.string().trim().min(1).max(40),
  sex: z.string().trim().min(1).max(30),
  size: z.string().trim().min(1).max(30),
  description: z.string().trim().min(20).max(3000),
  imageUrl: z.string().url().optional().nullable().or(z.literal("")),
  city: z.string().trim().min(2).max(100),
  state: z.string().trim().length(2),
});

export const campaignSchema = z.object({
  title: z.string().trim().min(4).max(120),
  description: z.string().trim().min(20).max(4000),
  goalCents: z.coerce.number().int().positive().max(1000000000),
  donationInstructions: z.string().trim().min(5).max(2000),
  imageUrl: z.string().url().optional().nullable().or(z.literal("")),
  endsAt: z.string().optional().nullable(),
});

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(30).optional(),
  message: z.string().trim().min(10).max(3000),
  type: z.enum(["CONTACT", "VOLUNTEER", "ADOPTION"]),
  petId: z.string().optional(),
  organizationId: z.string().optional(),
});
