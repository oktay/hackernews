import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex flex-col justify-center items-center gap-4 h-[calc(100dvh-96px)]">
      <h1 className="text-6xl font-extrabold">404</h1>
      <p className="text-muted-foreground">Page not found</p>
      <Button asChild>
        <a href="/">Go home</a>
      </Button>
    </div>
  );
}
