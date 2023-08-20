import { db, usersTable } from "@/lib/drizzle";

import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export const GET = async (request: NextRequest) => {
  try {
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json({
      message: "Error occurred",
      error: error.message,
    });
  }
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const nextCookkies = cookies();
  const { email, password } = body;
  try {
    if (!email || !password) {
      throw new Error("Fill the Required Fields");
    }
    const userArr = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (userArr.length === 0) {
      throw new Error("User does not exist! please register");
    }
    const userData = userArr[0];
    const isConfirm = bcrypt.compareSync(password, userData.password);
    if (!isConfirm) {
      throw new Error("Invalid Credentials!");
    }
    //setting cookies

    nextCookkies?.set("user_id", userData.id.toString());
    nextCookkies?.set("user_name", userData.username);
    nextCookkies?.set("auth_token", userData.token as string);
    return NextResponse.json({ message: "Login Successfull", data: userData });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json({
      message: "Error occurred",
      error: error.message,
    });
  }
};
