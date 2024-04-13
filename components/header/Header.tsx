import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /** @description main image */
  logo: ImageWidget;

  /** @description Image's alt text */
  alt?: string;
  /** @description Image's url */
  url?: string;
}

export default function Header({
  logo,
  alt,
  url,
}: Props) {
  return (
    <header class="relative z-10 w-full py-6 bg-[#051933] flex items-center justify-center">
      <a href={url}>
        <Image
          class="max-w-[75px] max-h-[35px]"
          src={logo}
          alt={alt}
          width={75}
          height={35}
        />
      </a>
    </header>
  );
}
