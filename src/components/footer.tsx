import { PROFILE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-10 text-sm text-muted md:px-10">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <p>Built with Next.js, Tailwind CSS and Framer Motion.</p>
      </div>
    </footer>
  );
}
