import type { Metadata } from "next";

import LoginRedirect from "@/components/LoginRedirect";

export const metadata: Metadata = {
  title: "Team Login",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return <LoginRedirect />;
}
