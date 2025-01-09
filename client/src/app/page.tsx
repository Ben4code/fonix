import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Welcome Section */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to FONIX</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Exploring new dimensions of reality
        </p>
      </header>

      {/* Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-12">
        <Card title="Real" imageSrc="/file.svg" />
        <Card title="Augmented" imageSrc="/globe.svg" />
        <Card title="Virtual" imageSrc="/window.svg" />
      </section>
    </div>
  );
}

interface CardProps {
  title: string;
  imageSrc: string;
}

function Card({ title, imageSrc }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      </div>
    </div>
  );
}
