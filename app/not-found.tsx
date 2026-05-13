import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center p-24 text-center">
      <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-linear-to-b from-foreground to-muted-foreground">404</h1>
      <p className="mt-4 text-xl text-muted-foreground">The page you're looking for doesn't exist.</p>
      <Link href="/" className="mt-8 rounded-full bg-primary px-8 py-3 text-primary-foreground hover:bg-primary/90 transition-colors">
        Go Home
      </Link>
    </main>
  );
}
