"use client"

import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/stuff');
      console.log('res:', res);
    }

    getData();
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1>Hello world</h1>

    </main>
  );
}
