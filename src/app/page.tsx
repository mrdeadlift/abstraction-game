"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">抽象化トレーニングゲーム</h1>
      <div className="flex flex-col gap-4">
        <Link href="/game?difficulty=basic" className="bg-blue-500 text-white px-6 py-3 rounded text-center">
          例題
        </Link>
        <Link href="/game?difficulty=practical" className="bg-green-500 text-white px-6 py-3 rounded text-center">
          実践
        </Link>
      </div>
    </main>
  );
}
