"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">抽象化トレーニングゲーム</h1>
      <div className="flex flex-col gap-4">
        <Link href="/game?difficulty=easy" className="bg-blue-500 text-white px-6 py-3 rounded text-center">
          初級
        </Link>
        <Link href="/game?difficulty=medium" className="bg-green-500 text-white px-6 py-3 rounded text-center">
          中級
        </Link>
        <Link href="/game?difficulty=hard" className="bg-red-500 text-white px-6 py-3 rounded text-center">
          上級
        </Link>
      </div>
    </main>
  );
}
