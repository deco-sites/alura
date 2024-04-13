import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  title?: string;
  subTitle?: string;
  itemList: {
    image?: ImageWidget;
    imageWidthMobile?: string;
    imageHeightMobile?: string;
    imageWidthDesktop?: string;
    imageHeightDesktop?: string;
    title?: string;
    text?: string;
  }[];
}

export default function Reasons({ title, subTitle, itemList }: Props) {
  return (
    <div class="py-[90px] bg-white">
      <div class="px-4 lg:px-10 xl:w-[1200px] xl:mx-auto xl:px-0">
        <div class="px-4 lg:px-10 xl:w-[1200px] xl:mx-auto xl:px-0">
          <h2 class="text-center text-[#167BF7] text-[27px] font-black lg:text-[40px]">
            {title}
          </h2>
          <p class="text-[16px] mt-4 mb-8 flex justify-center text-[#093366]">
            {subTitle}
          </p>
          <ul class="list-none flex flex-wrap justify-between">
            {itemList.map((item) => (
              <li class="mb-[55px] mr-[30px] md:w-[40%] lg:w-[18%] lg:mr-0">
                {item.image && (
                  <>
                    <Image
                      class="md:hidden"
                      src={item.image}
                      alt="Ícone da lista"
                      width={item.imageWidthMobile}
                      height={item.imageHeightMobile}
                    />
                    <Image
                      class="hidden md:block"
                      src={item.image}
                      alt="Ícone da lista"
                      width={item.imageWidthDesktop}
                      height={item.imageHeightDesktop}
                    />
                  </>
                )}
                <h3 class="text-[#093366] text-[22px] my-[13px] font-bold">
                  {item.title}
                </h3>
                {item.text && (
                  <p
                    class="text-[16px] mt-[7px] leading-[1.4] text-[#093366]"
                    dangerouslySetInnerHTML={{
                      __html: item.text,
                    }}
                  >
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
