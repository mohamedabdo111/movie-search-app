import Image from "next/image";
import Link from "next/link";
export default function Card({
  title,
  poster,
  Year,
  Type,
}: {
  title: string;
  year: string;
  poster: string;
  Year: string;
  Type: string;
}) {
  const isImageFound = poster === "N/A" ? "/no-image.png" : poster;
  return (
    <Link href={`details/${title}`} className="group relative block bg-black">
      <Image
        alt={title}
        src={isImageFound}
        width={500}
        height={500}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
          {Type}
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">{Year}</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">{title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
