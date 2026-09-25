import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { contactSchema } from "./contact-schema";

// Messages will be delivered here once a sender email domain is set up.
const CONTACT_RECIPIENT = "test@sunxtender.com";

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data) =>
    contactSchema.extend({ website: z.string().max(0).optional(), elapsedMs: z.number().min(3000) }).parse(data),
  )
  .handler(async () => {
    void CONTACT_RECIPIENT;
    // Email sending is not connected yet (no sender domain configured).
    return { delivered: false as const };
  });
