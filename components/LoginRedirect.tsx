"use client";

import { useEffect } from "react";

const TEAM_LOGIN_URL = "https://fahoproso-app.vercel.app/login";

/** Sends visitors who type /login straight to the team app. */
export default function LoginRedirect() {
  useEffect(() => {
    window.location.replace(TEAM_LOGIN_URL);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-center text-slate-600">
      <p>
        Redirecting to the team login…{" "}
        <a className="underline" href={TEAM_LOGIN_URL}>
          Continue
        </a>
      </p>
    </main>
  );
}
