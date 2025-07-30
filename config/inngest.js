import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/User";


// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickCart" });

export const syncUserCreation = inngest.createFunction(
    { id: "sync-user-from-clerk" },
    { event: "clerk/user.created" },
    async ({ event }) => {
        try {
            const { id, first_name, last_name, email_addresses, image_url } = event.data;
            const email = email_addresses[0]?.email_address || "unknown@example.com";

            const fallbackName = email.split("@")[0]; // fallback to email username if name is null

            const userData = {
                _id: id,
                email: email,
                name: ((first_name || "") + " " + (last_name || "")).trim() || fallbackName,
                imageUrl: image_url,
                cartItem: {},
            };

            await connectDB();
            const createdUser = await User.create(userData);
            console.log("✅ User created:", createdUser._id);
        } catch (error) {
            console.error("❌ Error in user creation:", error);
        }
    }
);


export const syncUsersUpdation = inngest.createFunction(
    {
        id: "update-user-from-clerk"
    },
    { event: "clerk/user.updated" },
    async ({ event }) => {
        const { id, first_name, last_name, email_address, image_url, email_addresses } = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + " " + last_name,
            imageUrl: image_url
        }
        await connectDB();
        await User.findByIdAndUpdate(id, userData)
    }

)

export const syncUserDeletion = inngest.createFunction(
    { id: "delete-user-from-clerk" },
    { event: "clerk/user.deleted" },
    async ({ event }) => {
        const { id } = event.data;

        await connectDB();

        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            console.warn(`User with ID ${id} not found or already deleted.`);
        } else {
            console.log(`User ${id} deleted successfully.`);
        }
    }
);