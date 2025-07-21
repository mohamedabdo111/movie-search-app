import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-700 shadow bg-gray-900 ">
      <div className="container mx-auto p-4">
        <Link href="/" className="flex items-center space-x-2 w-fit">
          <h1 className=" text-2xl font-semibold capitalize w-fit">
            Movie app
          </h1>
        </Link>
      </div>
    </nav>
  );
}
