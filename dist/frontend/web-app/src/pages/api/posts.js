"use strict";
// import type {NextApiRequest, NextApiResponse} from 'next';
// import {connectToDB} from '../../../utils/db';
// import { Post } from '../../../shared/models/Post';
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     await connectToDB();
//     if (req.method === 'GET') {
//         const posts = await Post.find().sort({ createdAt: -1 });
//         return res.status(200).json(posts);    
//     }
//     if (req.method === 'POST') {
//         try {
//             const post = Post.build(req.body);
//             await post.save();
//             return res.status(201).json(post);
//         } catch (error) {
//             return res.status(400).json({error: (error as Error).message});
//         }
//     }
//     res.setHeader('Allow', ['GET', 'POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
// }
