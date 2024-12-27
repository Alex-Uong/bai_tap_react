import { useState } from "react";

export default function ChangeGlasses() {
  const [selectedGlasses, setSelectedGlasses] = useState(null);

  const glasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  const handleGlassesChange = (url) => {
    setSelectedGlasses(url);
  };

  return (
    <div className="bg-gray-100">
      {/* Banner */}
      <div className="bg-black bg-opacity-70 text-white text-center py-6">
        <h1 className="text-2xl font-bold">TRY GLASSES APP ONLINE</h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-8">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Image 2 */}
          <div className="w-full md:w-1/3 relative">
            <img
              src="./glassesImage/model.jpg"
              alt="Model without Glasses"
              className="w-full rounded-lg shadow-lg"
            />
            <img
              src={selectedGlasses}
              alt="Glasses"
              className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2"
            />
          </div>
        </div>

        {/* Glasses Options */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          {glasses.map((glass) => (
            <div key={glass.id} className="flex items-center justify-center">
              <img
                src={glass.url}
                alt={glass.name}
                className="w-full rounded-lg shadow-lg cursor-pointer"
                onClick={() => handleGlassesChange(glass.url)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
