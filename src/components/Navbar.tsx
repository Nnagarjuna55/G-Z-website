"use client";

import { Header } from "@/components/ui/header-2";

export default function Navbar({ overDark = false }: { overDark?: boolean }) {
  return <Header overDark={overDark} />;
}
