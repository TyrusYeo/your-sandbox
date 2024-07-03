"use client";

import { BookComponent } from '@/components/BookComponent'

export default function Home() {
    return (
      <div className="flex justify-center items-center min-h-screen p-4" style={{ perspective: '2000px' }}>
        <BookComponent className="transform rotate-y(-20deg) rotate-x(10deg)" />
      </div>
    )
}