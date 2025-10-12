import { NextResponse } from "next/server";

type ResponseData = {
  totalNationalData: string;
  growthRate: string;
  propertyCoverage: string;
};

export async function GET() {
  const data: ResponseData = {
    totalNationalData: "56",
    growthRate: "78",
    propertyCoverage: "76.7M",
  };

  return NextResponse.json(data, { status: 200 });
}
