import mongoose, { Schema } from 'mongoose';
import { z } from 'zod';
// Define a Zod schema for runtime validation
const PostInputSchema = z.object({
    username: z.string().min(1),
    foodieId: z.string().length(24),
    favoritesFood: z.array(z.string()).min(1),
});
const postSchema = new Schema({
    username: { type: String, required: true },
    foodieId: { type: String, required: true },
    favoritesFood: { type: [String], required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}, {
    timestamps: true,
});
postSchema.statics.build = (input) => {
    const validated = PostInputSchema.parse(input);
    return new Post(validated);
};
const Post = mongoose.model('Post', postSchema);
export { Post };
