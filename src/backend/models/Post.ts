import mongoose, {Schema, Document, Model} from 'mongoose';
import {z} from 'zod';

// Define a Zod schema for runtime validation
const PostInputSchema = z.object({
    username: z.string().min(1),
    foodieId: z.string().length(24),
    favoritesFood: z.array(z.string()).min(1),
});
type PostInput = z.infer<typeof PostInputSchema>;

// Define the Post interface for MongoDB documents
interface PostDoc extends Document {
    username: string;
    foodieId: string;
    favoritesFood: string[];
    createdAt: Date;
    updatedAt: Date;
}

interface PostModel extends Model<PostDoc> {
    build(input: PostInput): PostDoc;
}

const postSchema = new Schema(
    {
        username: { type: String, required: true },
        foodieId: { type: String, required: true },
        favoritesFood: { type: [String], required: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    }
)

postSchema.statics.build = (input: PostInput): PostDoc => {
    const validated = PostInputSchema.parse(input);
    return new Post(validated)
};

const Post = mongoose.model<PostDoc, PostModel>('Post', postSchema);

export {Post}
