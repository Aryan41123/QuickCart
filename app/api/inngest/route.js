// app/api/inngest/route.ts
import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserDeletion, syncUsersUpdation } from "@/config/inngest";

const handler = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserDeletion,
    syncUsersUpdation
  ]
});

