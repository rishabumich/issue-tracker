import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod';
import prisma, { Prisma, PrismaClient } from "@prisma/client";

// we use zod to ensure that the data we are passing into the POST request of our API is the correct information to match our database schema
const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
})

export async function POST(request: NextRequest){
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body); // ensure data is valid with constraints given
    const prisma:PrismaClient = new PrismaClient();
    if (!validation.success){
        return NextResponse.json(validation.error.errors, {status: 400})
    }
    const newIssue = await prisma.issue.create({
            data: {title: body.title, description: body.description}
        });
    return NextResponse.json(newIssue, {status: 201});
    }
