"use client";

import { ReactNode } from "react";
import { useLenisScroll } from "@/hooks/useLenisScroll";

export default function LenisProvider({ children }: { children: ReactNode }) {
  useLenisScroll();
  return <>{children}</>;
}
