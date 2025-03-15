import { NextResponse } from "next/server";

export const logoutUser = () => {
  const res = NextResponse.json(
    { success: true, messsage: "Successfully logged out" },
    { status: 200 },
  );
  res.cookies.delete("EmpireGToken");
  return res;
};

export function GET() {
  return logoutUser();
}


