import Image from "next/image";

export const BEN_HEADSHOT_PRIMARY = "/images/ben-headshot.jpg";
export const BEN_HEADSHOT_SECONDARY = "/images/ben-headshot-2.jpg";

/** Intrinsic 2:3 size for the portrait frame; drives `srcset` / optimizer widths. */
const WIDTH = 900;
const HEIGHT = 1350;

export type HeadshotImageProps = {
  src?: string;
  alt?: string;
  caption?: string;
  priority?: boolean;
  quality?: number;
  /** Applied to the aspect-ratio frame (includes left border). */
  borderClassName?: string;
  captionClassName?: string;
  sizes?: string;
};

export function HeadshotImage({
  src = BEN_HEADSHOT_PRIMARY,
  alt = "Ben Gharagozli, Attorney",
  caption = "Ben Gharagozli, Attorney",
  priority = false,
  quality = 85,
  borderClassName = "border-l-4 border-[var(--color-accent)]",
  captionClassName = "mt-3 text-sm text-neutral-600",
  sizes = "(max-width: 1024px) 100vw, 400px",
}: HeadshotImageProps) {
  return (
    <div>
      <div
        className={`relative aspect-[2/3] w-full max-h-[500px] lg:max-h-none overflow-hidden ${borderClassName}`}
      >
        <Image
          src={src}
          alt={alt}
          width={WIDTH}
          height={HEIGHT}
          quality={quality}
          priority={priority}
          className="h-full w-full object-cover" style={{ objectPosition: "center 15%" }}
          sizes={sizes}
        />
      </div>
      <p className={captionClassName}>{caption}</p>
    </div>
  );
}
