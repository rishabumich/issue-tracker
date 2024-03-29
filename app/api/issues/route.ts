import { NextRequest, NextResponse } from "next/server";
import prisma, { Prisma, PrismaClient } from "@prisma/client";
import { createIssueSchema } from "../../validationSchemas";

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
