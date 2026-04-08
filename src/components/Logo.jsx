import ResponsivePicture from "./ResponsivePicture";

export default function Logo({ className = "h-8 md:h-9" }) {
  return (
    <ResponsivePicture
      base="/logo-getdrives"
      ext="webp"
      alt=""
      pictureClassName="inline-block w-auto"
      loading="eager"
      decoding="async"
      sizes="(max-width: 768px) 120px, 140px"
      className={`block w-auto object-contain object-left brightness-[1.05] contrast-[1.12] saturate-[1.12] [backface-visibility:hidden] [transform:translateZ(0)] ${className}`}
    />
  );
}
