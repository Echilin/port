import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-blue-600 text-white p-3 flex gap-4 justify-center">
      <Link href="/">Home</Link>
      <Link href="/sobre">Sobre</Link>
      <Link href="/experiencia">Experiência</Link>
    </nav>
  );
}
