import {z} from "zod";


const userSchema = z.object({
    firstName: z.string(),
    email: z.string().email(),
    profileUrl: z.string().url(),
    age: z.number().min(18),
    friends: z.array(z.string()),
    settings: z.object({
        isSubscribed: z.boolean(),
    }),
});

const user = { 
    firstName: "John",
    email: "john@example.com",
    profileUrl: "https://example.com/john",
    age: 25,
    friends: ["Alice", "Bob"],
    settings: {
        isSubscribed: true,
    }
};

console.log(userSchema.safeParse(user));

export default function Learn3() {
    return (
        <div>
            <h1>Learn 3 - React Query + Zod + React Hook Form</h1>
            <p>Em construção...</p>
        </div>
    )
}