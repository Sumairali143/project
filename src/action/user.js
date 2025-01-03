
"use server";

import prisma from "@/lib/db";
import bcrypt from "bcryptjs"

export async function signupUser(name, email, password) {
try {
    
    if (!name || !email || !password) {
        throw new Error("All fields are required");
    }

    const existingUser = await prisma.user.findUnique({
        where:{email}
    });

    if (existingUser) {
        throw new Error("User already exists...");
    }
    const hashPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
        data:{
            name,
            email,
            password:hashPassword
        }
    })
    console.log("Data saved");
    return {success:"Registered..."}
} catch (error) {
    return {error:"Internal server error"}
}
}

export async function loginUser(formData){
    const email = formData.get("email");
    const password = formData.get("password");
    if (!email || !password) {
        throw new Error("All fields are required");
    }
    const existingUser = await prisma.user.findUnique({
        where:{email}
    });

    if (!existingUser) {
        return { message : "Invalid credentials" };
    }

    const isPassword = existingUser.password === password;

    if (!isPassword) {
        return { message : "Invalid credentials" };
    }

    return { message : "Logged in" }
}