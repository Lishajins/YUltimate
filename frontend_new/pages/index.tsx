import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Team XYZ Frontend
        </h1>
        <p className="text-lg text-gray-600">
          Everything is working perfectly now ✅
        </p>
      </main>
    </div>
  );
}
