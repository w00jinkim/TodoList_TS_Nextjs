import Pagestart from "./pagestart";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-yellow-50">
        <h1 className="text-5xl font-bold text-black mt-14">
          Welcome to Will&apos;s Quick Checklist!
        </h1>
        <h2 className="text-3xl font-bold text-black mt-14">
          Take quick notes for your daily routine!
        </h2>
        <Pagestart />
      </div>
    </div>
  );
}
