"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-white">

      <div className="text-center max-w-sm">

        {/* TITLE */}
        <h1 className="text-5xl font-semibold tracking-tight">
          404
        </h1>

        {/* TEXT */}
        <p className="text-gray-500 mt-3 text-sm">
          Page not found. The page you are looking for doesn’t exist.
        </p>

        {/* ACTIONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">

          <button
            onClick={() => window.history.back()}
            className="
            px-5 py-2.5 text-sm
            border border-gray-200
            rounded-full
            hover:bg-gray-100
            transition
            "
          >
            <span className="flex items-center justify-center gap-2">
              <ArrowLeft size={14} />
              Go Back
            </span>
          </button>

          <Link
            href="/"
            className="
            px-5 py-2.5 text-sm
            bg-black text-white
            rounded-full
            hover:opacity-90
            transition
            "
          >
            Back to Home
          </Link>

        </div>

      </div>

    </main>
  );
}