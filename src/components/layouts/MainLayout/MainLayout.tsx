import Typography from "@/components/ui/typography";
import Link from "next/link";
import Image from "next/image";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="flex flex-row items-center justify-start p-4">
        <div>
          <Image src="/blog_logo.png" alt="Logo" width={150} height={150} />
        </div>
        <div className="flex flex-col items-start">
          <Typography.H1>Desarrollador Frustrado</Typography.H1>
          <Typography.Blockquote>
            Historias sin filtros sobre código y vida
          </Typography.Blockquote>
          <div className="my-4 border-t-2 border-gray-300 dark:border-gray-700 w-lg" />
        </div>
      </header>
      <main className="flex-1 p-4">{children}</main>
      <footer className="flex items-center justify-center p-4">
        <Typography.Muted>
          Made with &hearts; by{" "}
          <Link href="https://github.com/CFerndp">Cristian</Link> -{" "}
          {new Date().getFullYear()}
        </Typography.Muted>
      </footer>
    </main>
  );
};
