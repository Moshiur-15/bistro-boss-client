import { Parallax } from "react-parallax";

export default function MenuCover({ Img, title, dricaption }) {
  return (
    <Parallax
      blur={{ min: -30, max: 30 }}
      bgImage={Img}
      bgImageAlt="Img"
      strength={-200}
    >
      <div className="hero h-[500px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center bg-black bg-opacity-50 py-12 px-48">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold uppercase">{title}</h1>
            <p className="mb-5 text-sm text-gray-300">{dricaption}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
