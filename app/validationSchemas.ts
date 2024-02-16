import { z } from 'zod';

// we use zod to ensure that the data we are passing into the POST request of our API is the correct information to match our database schema
export const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
});
