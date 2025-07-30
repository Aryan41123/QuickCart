import { Inngest } from "inngest";
import connectDB from "./db.js";
import User from "@/models/User.js";

// Create Inngest client
export const inngest = new Inngest({
  id: "quickCart",
});

// Helper to extract user data safely
function extractUserData(data) {
  const {
    id,
    first_name,
    last_name,
    image_url,
    email_addresses = [],
  } = data;

  const email = email_addresses[0]?.email_address || "unknown@example.com";
  const fallbackName = email.split("@")[0];

  return {
    _id: id,
    email,
    name: ((first_name || "") + " " + (last_name || "")).trim() || fallbackName,
    imageUrl: image_url,
  };
}

// CREATE user function
export const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    try {
      const userData = extractUserData(event.data);
      await connectDB();

      const createdUser = await User.create({
        ...userData,
        cartItem: {},
      });

      console.log("✅ User created:", createdUser._id);
    } catch (error) {
      console.error("❌ Error in user creation:", error);
    }
  }
);

// UPDATE user function
export const syncUsersUpdation = inngest.createFunction(
  { id: "update-user-from-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    try {
      const userData = extractUserData(event.data);
      await connectDB();

      const updatedUser = await User.findByIdAndUpdate(userData._id, userData, {
        new: true,
        upsert: true,
      });

      console.log("✏️ User updated:", updatedUser._id);
    } catch (error) {
      console.error("❌ Error updating user:", error);
    }
  }
);

// DELETE user function
export const syncUserDeletion = inngest.createFunction(
  { id: "delete-user-from-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    try {
      const { id } = event.data;
      await connectDB();

      const deletedUser = await User.findByIdAndDelete(id);

      if (!deletedUser) {
        console.warn(`⚠️ User ${id} not found.`);
      } else {
        console.log(`🗑️ User ${id} deleted.`);
      }
    } catch (error) {
      console.error("❌ Error deleting user:", error);
    }
  }
);
