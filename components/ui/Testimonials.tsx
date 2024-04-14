import Slider from "../../components/ui/Slider.tsx";
import SliderJS from "../../islands/SliderJS.tsx";
import { useId } from "../../sdk/useId.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../../components/ui/Icon.tsx";

interface Props {
  title?: string;
  testimonials: {
    text?: string;
    image?: ImageWidget;
    name?: string;
  }[];
  text?: string;
  textUrl?: string;
}

export default function Testimonials(
  { title, testimonials, text, textUrl }: Props,
) {
  const id = useId();
  return (
    <div class="relative py-24 bg-black" id={id}>
      <div class="px-4 lg:px-10 max-w-[1280px] xl:px-0 xl:mx-auto xl:w-[1200px]">
        <div class="max-w-[80%] mx-auto">
          <div class="flex justify-between items-end">
            <h3 class="text-white max-w-[580px] font-bold text-[27px] leading-[120%]">
              {title}
            </h3>

            <div class="hidden lg:flex justify-center items-center gap-4">
              <Slider.PrevButton class="bg-[#0966C1] btn btn-circle btn-outline col-start-1 col-end-2 row-start-1 row-span-full">
                <Icon size={24} id="ChevronLeft" strokeWidth={3} />
              </Slider.PrevButton>

              <Slider.NextButton class="bg-[#0966C1] placeholder:btn btn-circle btn-outline col-start-3 col-end-4 row-start-1 row-span-full">
                <Icon size={24} id="RightArrow" strokeWidth={3} />
              </Slider.NextButton>
            </div>
          </div>
        </div>
        <div class="bg-[#03C2E0] mt-8 w-full h-[1.11px] max-w-[80%] mx-auto">
        </div>
      </div>

      <Slider class="carousel col-span-full col-start-1 row-start-1 row-span-full h-full w-full">
        {testimonials.map((item, index) => (
          <Slider.Item
            index={index}
            class="w-full h-full"
          >
            <div class="bg-[#0966C1] rounded-[18px] my-10 mx-4 p-6 min-w-[324px] w-[324px] min-h-[284px] flex flex-col justify-between">
              <p class="text-white text-[1rem] leading-[1.125rem] tracking-[.5px] mb-6">
                {item.text}
              </p>
              <div class="flex items-center">
                {item.image &&
                  (
                    <Image
                      src={item.image}
                      alt="Foto da pessoa do depoimento"
                      width={50}
                      height={50}
                      class="max-w-[50px] max-h-[50px] rounded-[50px] mr-4"
                    />
                  )}
                <h3 class="text-white text-[15px] leading-[18px]">
                  {item.name}
                </h3>
              </div>
            </div>
          </Slider.Item>
        ))}
      </Slider>

      <div class="hidden md:flex lg:hidden justify-center items-center gap-4">
        <Slider.PrevButton class="bg-[#0966C1] btn btn-circle btn-outline col-start-1 col-end-2 row-start-1 row-span-full">
          <Icon size={24} id="ChevronLeft" strokeWidth={3} />
        </Slider.PrevButton>

        <Slider.NextButton class="bg-[#0966C1] placeholder:btn btn-circle btn-outline col-start-3 col-end-4 row-start-1 row-span-full">
          <Icon size={24} id="RightArrow" strokeWidth={3} />
        </Slider.NextButton>
      </div>
      <SliderJS rootId={id} />
      <div class="px-4 lg:px-10 max-w-[1280px] xl:px-0 xl:mx-auto xl:w-[1200px]">
        <a
          class="bg-[#0966C1] block rounded-[77px] max-w-[900px] w-full py-6 px-8 text-[13px] text-center leading-[1] text-[#F5F5F5] mt-8 mx-auto lg:text-[20px]"
          href={textUrl}
        >
          {text}
        </a>
      </div>
    </div>
  );
}
