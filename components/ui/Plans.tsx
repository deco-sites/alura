import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { Signal, useSignal } from "@preact/signals";

interface ContentList {
  listText?: string;
  highlight?: boolean;
  tooltipText?: string;
}

export interface Props {
  title?: string;
  subTitle?: string;
  cards: {
    listCard: {
      highlight?: boolean;
      effectImage?: ImageWidget;
      image?: ImageWidget;
      title?: string;
      /** @description Preço De */
      listPrice?: string;
      /** @description Preço Por */
      sellingPrice?: string;
      discountValue?: string;
      numberOfInstallments?: string;
      installmentsValue?: string;
      cashPaymentValue?: string;
      contentList: ContentList[];
      buttonText: string;
      buttonUrl: string;
    }[];
  };
}

function Tooltips({ list }: { list: ContentList }) {
  const tooltip = useSignal(false);
  return (
    <li
      style="background-image: url(/image/icon-check.svg); background-repeat: no-repeat; background-position: center left 3%; background-size: 15px;"
      class={`flex items-center mb-4 text-[14px] text-[#D7F9FF] flex-wrap gap-2 pl-8 lg:w-[95%] ${list.highlight
        ? `listHighlight border-solid border-[1px] border-[#0E4953] bg-[#142342] p-[.6rem] relative`
        : ""
        }`}
    >
      <div class="max-w-[85%]">
        {list.listText && (
          <span class="cardBold"
            dangerouslySetInnerHTML={{
              __html: list.listText,
            }}
          >
          </span>
        )}
        <div
          style="background-image: url(/image/icon-como-funciona.svg); background-size: contain; background-repeat: no-repeat;"
          class={`${tooltip.value === true ? `tooltipFit` : ""
            } inline-block relative top-[2px] w-[14px] h-[14px] cursor-pointer ml-[4px] mt-[2px]`}
          onClick={() => (tooltip.value = !tooltip.value)}
        >
          {list.tooltipText && (
            <p
              class={`${tooltip.value === true
                ? `opacity-100 visible`
                : "opacity-0 invisible"
                } absolute tooltipPosition right-[-95px] text-[14px] leading-[1.47] bg-[#01080E] rounded-[2px] px-[15px] py-3 pb-[15px] w-[65vw] max-w-[200px] z-20`}
            >
              {list.tooltipText}
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

export default function Plans({ title, subTitle, cards }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
                @keyframes loading {
                    0% {
                        -webkit-transform: rotate(0);
                        transform: rotate(0);
                    }
                    
                    100% {
                        -webkit-transform: rotate(1turn);
                        transform: rotate(1turn);
                    }
                }
                .plans-background::before {
                    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2.25rem;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%);
    background-color: #175A70;
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
                }
                .plans-background::after {
                    content: "";
    display: block;
    position: static;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2.25rem;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%);
    background-color: #08142C;
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
                }
                .plans-card::before {
                    z-index: -1;
                    content: "";
                    position: absolute;
                    top: -1px;
                    left: -1px;
                    width: calc(100% + 2px);
                    height: calc(100% + 2px);
                    background-color: #175A70;
                }
                .pricesCut::after {
                    content: "";
    top: 0;
    left: 0;
    border-bottom: 2px solid #a8adb2;
    position: absolute;
    width: 100%;
    height: 50%;
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
                }

                .cardBold strong {
                  color: #6CDCFF;
                }

                .listHighlight::before {
                    content: "";
    display: block;
    width: 8px;
    height: 107.5%;
    background-image: url(/image/label-list.svg);
    background-repeat: no-repeat;
    background-position: left;
    background-size: cover;
    position: absolute;
    left: -9px;
    top: -2px;
                }

                .registerButton::before {
                    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background-color: #2BFDBE;
    z-index: -2;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 25px), calc(100% - 25px) 100%, 0 100%);
                }
                .registerButton::after {
                    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #2BFDBE;
    z-index: -1;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 25px), calc(100% - 25px) 100%, 0 100%);
                }
      @media only screen and (max-width: 530px) {
        .titulo-destaque {
            max-width: 360px;
        }
        .subtitulo-destaque {
            max-width: 250px;
            width: 75%;
        }
      }

      .tooltipPosition {
        top: calc(100% + 9px);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .tooltipFit::before {
        content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    z-index: 11;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    height: 0;
    width: 0;
    border-bottom: solid 10px #01080E;
    border-left: solid 8px transparent;
    border-right: solid 8px transparent;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
      }

      `,
        }}
      />
      <div
        style="background-image: url(/image/bg-square.png); background-size: auto 2%; background-repeat: repeat-x; background-position: left top;"
        class="bg-[#01080E] w-full min-h-full relative"
      >
        <div class=" pt-12 text-center text-white">
          <div class="px-4 relative lg:max-w-[1280px] lg:px-0 xl:w-[1200px] xl:mx-auto z-10">
            <h1 class="text-white font-black text-[36px] lg:text-[64px] leading-[2.6563rem] lg:leading-[4.125rem] tracking-[1px] pb-6 mx-auto mt-[25px] mb-[15px] titulo-destaque">
              {title}
            </h1>
            <h2 class="text-white text-[14px] lg:text-[30px] leading-[1.4063rem] lg:leading-[2.4375rem] text-center tracking-[.5px] lg:tracking-[1px] mb-0 mx-auto subtitulo-destaque">
              {subTitle}
            </h2>
          </div>
        </div>
      </div>
      <div>
        <div class="overflow-x-hidden bg-[#01080E]">
          <div class="px-4 md:px-[30px] relative z-10">
            <div class="px-4">
              <div class="flex flex-col items-center gap-12 mt-[15px] md:gap-0 md:mt-28 md:flex-row lg:justify-center">
                {cards.listCard.map((card, index) => (
                  <div
                    key={index}
                    style="filter: drop-shadow(0 5px 10px rgba(0,0,0,.2))"
                    class={`w-full max-w-[380px] relative mx-auto lg:mx-[initial] ${index === 1 ? "md:ml-[-1rem]" : ""
                      } ${card.highlight
                        ? `border-t-[10px] border-solid border-[#6CDCFF]`
                        : ""
                      }`}
                  >
                    {card.highlight && (
                      <div class="absolute top-[-40px] right-0">
                        <div class="relative">
                          <div
                            style="background-image: url(/image/texto-selo.svg); background-size: 100%; background-repeat: no-repeat; animation: loading 50s linear infinite;"
                            class="w-[90px] h-[90px] right-[-180px] relative z-50 top-[7px] lg:w-[120px] lg:h-[120px] lg:right-[-270px] lg:top-[23px] xl:w-[140px] xl:h-[140px] xl:right-[-281px] xl:top-0"
                          >
                          </div>
                          <span
                            style="background-image: url(/image/selo-card.webp); background-size: contain; background-repeat: no-repeat;"
                            class="relative block top-[-120px] right-[-120px] z-40 w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] lg:right-[-182px] lg:top-[-151px] xl:w-[400px] xl:h-[400px] xl:top-[-200px]"
                          >
                          </span>
                        </div>
                      </div>
                    )}
                    <div class="p-[1px] plans-background">
                      <div
                        style="background-image: linear-gradient(180deg,#194A66 0%,#20345C 13.31%,#08142C 83.05%);"
                        class="relative pt-8 bg-[#175A70] flex flex-col justify-center items-center plans-card"
                      >
                        {card.effectImage && (
                          <Image
                            class="absolute top-0 left-0 w-[102px]"
                            src={card.effectImage}
                            alt="Ícone do canto superior esquerdo do card"
                            width={102}
                            height={107}
                            loading="lazy"
                          />
                        )}
                        {card.image && (
                          <Image
                            class="w-[60px]"
                            src={card.image}
                            alt="Ícone do canto superior esquerdo do card"
                            width={60}
                            height={60}
                            loading="lazy"
                          />
                        )}
                        <h3 class="font-secondary font-bold text-[#D7F9FF] text-[18px] uppercase mt-2">
                          {card.title}
                        </h3>
                        <div class="text-center mt-4 mb-8 mx-auto flex flex-col gap-4">
                          <div class="">
                            <div class="flex items-center justify-center gap-[5px] leading-[1] font-secondary font-bold text-[#D7F9FF]">
                              <div>De</div>
                              <span class="relative text-[16px] font-secondary font-bold text-[#76FFF8] pricesCut">
                                R$ {card.listPrice}
                              </span>
                            </div>
                            <div class="flex items-center justify-center gap-[5px] leading-[1] text-[#D7F9FF] ">
                              <div>por 12x</div>
                              <span class="relative text-[16px] font-secondary font-bold text-[#76FFF8] pricesCut">
                                R$ {card.sellingPrice}
                              </span>
                            </div>
                          </div>
                          <span class="bg-[#76FFF8] text-[#142342] px-4 py-[5px] m-0 text-[12px] font-bold">
                            Desconto: {card.discountValue}
                          </span>
                          <div>
                            <div class="flex items-center justify-center gap-[5px] leading-[1] text-[#D7F9FF]">
                              <span class="text-[16px] font-terciary">
                                {card.numberOfInstallments}
                              </span>
                              <span class="text-[36px] text-[#76FFF8] font-bold font-terciary">
                                R${card.installmentsValue}
                              </span>
                            </div>
                            <p class="text-[14px] text-[#D7F9FF]">
                              à vista R${card.cashPaymentValue}
                            </p>
                          </div>
                        </div>
                        <ul class="px-8">
                          {card.contentList.map((list) => (
                            <Tooltips list={list} />
                          ))}
                        </ul>

                        <a
                          style="max-width: calc(100% - 72px); transition: all 0.2s;"
                          class="relative z-10 w-full p-6 mt-[25px] text-[#01080E] font-semibold inline-block text-[16px] leadinh-[1] text-center uppercase no-underline registerButton"
                          href={card.buttonUrl}
                        >
                          {card.buttonText}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                class="text-[#2BDEFD] mb-28 mt-8 flex items-center justify-center underline"
                href="/empresas"
              >
                Conheça os planos para empresas
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
