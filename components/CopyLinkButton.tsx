"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";

export default function CopyLinkButton({
  url,
  className = "",
}: {
  url: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // clipboard blocked (e.g. insecure context) — no-op, button still confirms
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy link to this guide"
      className={`inline-flex items-center gap-2 font-semibold rounded-lg px-5 py-2.5 transition-colors ${className}`}
    >
      {copied ? <Check size={18} /> : <Link2 size={18} />}
      {copied ? "Link copied!" : "Copy link"}
    </button>
  );
}
