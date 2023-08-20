import { db, usersTable } from "@/lib/drizzle";
import { signJwtAccessToken } from "@/lib/jwt";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { JwtPayload } from "jsonwebtoken";

// export const GET = async (request: NextRequest) => {

// };

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const { name, email, password, cpassword } = body;
  try {
    if (!name || !email || !password || !cpassword) {
      throw new Error("Fill the Required Fields");
    }
    if (password !== cpassword) {
      throw new Error("Passwords do not match");
    }
    const userExist = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (userExist.length === 0) {
      const payload: JwtPayload = {
        username: name,
        useremail: email,
      };

      const authtoken = signJwtAccessToken(payload);
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(password, salt);
      const insertData = {
        username: name,
        email: email,
        password: hashPassword,
        token: authtoken,
      };
      const res = await db.insert(usersTable).values(insertData).returning();
      return NextResponse.json({
        message: "User registered successfully",
        data: res,
      });
    } else {
      throw new Error("User Already Registered! Please login.");
    }
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json({
      message: "Error occurred",
      error: error.message,
    });
  }
};
