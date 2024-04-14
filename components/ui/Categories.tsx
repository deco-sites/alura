import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Categories {
    image?: ImageWidget;
    /**
    * @format color
    * @description color to be used in title and subtitle
    */
    textColor?: string;
    url?: string;
    title?: string;
    subTitle?: string;
    content: {
        textContent?: string;
        textUrl?: string;
    }[]
}

export interface Props {
    title?: string;
    categories: Categories[]
}

export default function Categories({ title, categories }: Props) {
    return (
        <><style
            dangerouslySetInnerHTML={{
                __html: `
            @keyframes slideInFromLeft {
                0% {
                    -webkit-transform: translateX(-50%);
                    transform: translateX(-50%);
                }
                100% {
                    opacity: 1;
                }
            }

            @keyframes slideInFromRight {
                0% {
                    -webkit-transform: translateX(50%);
                    transform: translateX(50%);
                }
                100% {
                    opacity: 1;
                }
            }

            .categories__wrapper--home {
                min-height: 64px;
                display: -webkit-box;
                display: -webkit-flex;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                flex-direction: column;
                -webkit-box-pack: center;
                justify-content: center;
                position: relative;
                top: 0;
                box-shadow: 5px 12px 12px rgba(0,0,0,.04);
                background-color: #012640;
                opacity: 0;
                animation-duration: 0.7s;
                animation-timing-function: ease-out;
                animation-delay: 0.5s;
                animation-iteration-count: 1;
                animation-fill-mode: forwards;
                padding: .0625rem;
                clip-path: polygon(0 0, 100% 0, 100% calc(100% - 25px), calc(100% - 25px) 100%, 0 100%);
                width: calc(50% - 6px);
            }

            .categories__wrapper--home:hover {
                background-color: #2BDEFD;
            }

            @media screen and (min-width: 768px) {
                .categories__wrapper--home {
                    width: calc(33% - 6px);
                }
            }

            @media screen and (min-width: 1024px) {
                .categories__wrapper--home:hover {
                    position: relative;
                    top: -10px;
                    -webkit-transition: top 0.3s ease;
                    transition: top 0.3s ease;
                }
            }

            .categories__calls__description:hover {
                opacity: .8
            }

            .categories__wrapper--home:nth-child(odd) {
                animation-name: slideInFromLeft;
            }
            .categories__wrapper--home:nth-child(even) {
                animation-name: slideInFromRight;
            }
`,
            }} /><div class="bg-[#01080E] py-24">
                <div class="px-4 md:px-[30px] lg:max-w-[1280px] lg:px-0 xl:w-[1200px] xl:mx-auto">
                    <h3 class="font-quartenary max-w-[80%] text-white pb-12 font-bold text-[24px] leading-[2.1875rem] text-center tracking-[1px] mx-auto md:pb-8">
                        {title}
                    </h3>
                    <nav class="flex justify-center">
                        <div class="z-10 flex flex-wrap justify-center gap-[.5rem]">
                            {categories.map((item) => (
                                <div class="categories__wrapper--home lg:w-full lg:max-w-[200px] min-h-[200px] justify-start">
                                    <div style="clip-path: polygon(0 0,100% 0,100% calc(100% - 25px),calc(100% - 25px) 100%,0 100%);" class="bg-[#021017] min-h-[100%] flex flex-col justify-center p-4">
                                        <a href={item.url} class="cursor-pointer absolute top-0 bottom-0 left-0 right-0 h-full w-full pl-0"></a>
                                        <div class="">
                                            <div class="max-w-[24px] max-h-[24px] hidden md:block">
                                                {item.image && <Image
                                                    class="max-w-[24px] max-h-[24px]"
                                                    src={item.image}
                                                    alt="Ícone do canto superior esquerdo do card"
                                                    width={24}
                                                    height={24}
                                                    loading="lazy"
                                                />}
                                            </div>
                                            <div style={{ color: item.textColor }}>
                                                <span class="inline-block text-[12px]">{item.title}</span>
                                                <h2 class="text-[15px] uppercase font-bold leading-[1.5] mt-[5px]">{item.subTitle}</h2>
                                            </div>
                                        </div>
                                        <nav class="block z-[12] text-[12px] leading-[1.5] mt-3">
                                            {item.content.map((txts) => (
                                                <a href={txts.textUrl} class="no-underline text-[#D7F9FF] categories__calls__description">{txts.textContent}</a>
                                            ))}
                                        </nav>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </nav>
                </div>
            </div></>
    )
}