import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { verifyJwtToken } from "@/lib/jwt";

export const GET = async (request: NextRequest) => {
  const req = request.nextUrl;

  const id = req.searchParams.get("user_id") as string;
  try {
    if (request?.method === "GET") {
      const res = await db
        .select()
        .from(cartTable)
        .where(eq(cartTable?.user_id, id as string));
      return NextResponse.json({ message: "data get successfully", data: res });
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  const headersList = headers();
  const token = headersList.get("authorization")?.split(" ")[1];
  const uid = uuid();
  const user_id = cookies()?.get("user_id")?.value;
  if (!user_id) {
    cookies()?.set("user_id", uid);
  }
  const result = verifyJwtToken(token);

  try {
    if (
      result !== undefined &&
      result !== "invalid token" &&
      result !== "jwt malformed"
    ) {
      const insertData = {
        user_id: cookies()?.get("user_id")?.value as string, // Use your logic to get the correct user_id
        product_id: req.productId,
        product_name: req.productName,
        product_image: req.productImage,
        product_description: req.productDescription,
        product_price: req.productPrice,
        product_quantity: req.productQuantity,
      };

      const res = await db.insert(cartTable).values(insertData).returning();

      return NextResponse.json({
        message: "Data inserted successfully",
        data: res,
      });
    } else {
      throw new Error(result);
    }
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json({
      message: "Error occurred",
      error: error.message,
    });
  }
};

export const DELETE = async (request: NextRequest) => {
  const req = request.nextUrl;
  const id = req.searchParams.get("item_id") as string;
  try {
    if (request.method === "DELETE") {
      if (id) {
        await db.delete(cartTable).where(eq(cartTable?.product_id, id));
        return NextResponse.json({ message: "Item deleted successfully" });
      } else {
        await db.delete(cartTable);
        return NextResponse.json({ message: "Items deleted successfully" });
      }
    }
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json({
      message: "Error occurred",
      error: error.message,
    });
  }
};

export const PUT = async (request: NextRequest) => {
  const req = request.nextUrl;
  const id = req.searchParams.get("item_id") as string;
  const data = await request.json();

  try {
    const updatedItem = await db
      .update(cartTable)
      .set(data)
      .where(eq(cartTable?.product_id, id))
      .returning();
    return NextResponse.json({ message: "Item updated successfully" });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json({
      message: "Error occurred",
      error: error.message,
    });
  }
};
