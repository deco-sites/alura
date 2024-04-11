import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../../components/ui/Icon.tsx";

export interface Props {
  /** @description main image */
  logo: ImageWidget;

  /** @description Image's alt text */
  alt?: string;
  /** @description Image's url */
  url?: string;
  socials: {
    text?: string;
    cards: {
      url?: string;
      image?: ImageWidget;
    }[];
  };
  navigation: {
    title?: string;
    content: {
      text: string;
      url?: string;
    }[];
  }[];
  partners: {
    image?: ImageWidget;
    width?: number;
    height?: number;
    text?: string;
  }[];
  courses: {
    titleUrl?: string;
    title?: string;
    content: {
      text?: string;
      textUrl?: string;
    }[];
  }[];
  footerColumns: {
    title?: string;
    columnContent: {
      image?: ImageWidget;
      text?: string;
      url?: string;
    }[];
  }[];
}
function Footer(
  { logo, alt, url, socials, navigation, partners, courses, footerColumns }:
    Props,
) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
      @media only screen and (max-width: 800px) {
        .flexPercentage {
          flex: 1 0 50%;
        }
      }
      .footerColumnBorder:not(:first-child) {
          border-left: solid 1px #e3e9ed;
      }
      `,
        }}
      />
      <footer class="bg-[#051d3b] p-[50px] pt-[30px] ml2:py-[100px] ml2:leading-[1.4]">
        <div class="px-4 sm:px-[25px] ml2:px-[30px] mx-auto flex flex-col justify-between xl:w-[1200px] xl:max-w-[1280px] xl:px-0">
          <div class="w-full flex flex-col ml2:flex-row justify-between items-center lg:mb-10">
            <div class="text-center ml2:text-left w-full mt-5">
              <div class="ml2:flex ml2:flex-col">
                <a href={url} class="inline-block">
                  <Image
                    class="ml2:hidden max-w-[75px] max-h-[35px]"
                    src={logo}
                    alt={alt}
                    width={75}
                    height={35}
                  />
                  <Image
                    class="hidden ml2:block max-w-[90px] max-h-[41px]"
                    src={logo}
                    alt={alt}
                    width={90}
                    height={41}
                  />
                </a>
                <p class="hidden ml2:block pb-3 mt-[10px] mb-3 text-[12px] leading-[1.4] text-white">
                  AOVS Sistemas de Informática S.A <br />{" "}
                  CNPJ 05.555.382/0001-33
                </p>
              </div>
            </div>
            <div class="text-center ml2:text-right my-[25px] ">
              <h2 class="font-bold text-[20px] ml2:text-[14px] mb-[7px] text-white font-secondary">
                {socials.text}
              </h2>
              <div class="flex items-center justify-center mt-[5px]">
                {socials.cards.map((social) => (
                  <a class="p-[3px]" href={social.url}>
                    {social.image &&
                      <>
                        <Image
                          class="ml2:hidden max-w-[75px] max-h-[35px] mr-[1.5px]"
                          src={social.image}
                          alt="Imagem da rede social"
                          width={28}
                          height={28} />
                        <Image
                          class="max-w-[75px] max-h-[35px] mr-[1.5px] hidden ml2:block"
                          src={social.image}
                          alt="Imagem da rede social"
                          width={32}
                          height={32} />
                      </>
                    }
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div
            class="my-[72px] ml2:my-0 flex ml2:justify-between text-left w-full"
            style="flex-flow:row wrap;"
          >
            {navigation.map((column) => (
              <div class="mb-[50px] sm:mb-4 ml2:mb-0 ml2:pr-4 flexPercentage">
                <h2 class="font-bold ml2:font-black text-[20px] leading-[1.7rem] mt-[20px] ml2:mt-0 ml2:text-[18px] mb-4 text-white">
                  {column.title}
                </h2>
                <ul
                  class="mb-[27px] list-none flex"
                  style="flex-flow:column wrap;"
                >
                  {column.content?.map((item) => (
                    <li class="pb-3 font-normal text-sm leading-[1.275rem] ml2:leading-[1.75rem] text-white">
                      <a
                        href={item.url}
                        dangerouslySetInnerHTML={{
                          __html: item.text,
                        }}
                      >
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div class="max-w-[243px] ml2:max-w-[350px] ml2:min-w-[350px] ml2:mr-[10px]">
              <div class="block mt-[55px] ml2:mt-0">
                <h2 class="text-lg ml2:text-sm ml2:font-bold pb-3 text-white">
                  Novidades e Lançamentos
                </h2>
                <div class="relative">
                  <input
                    placeholder="Email*"
                    class="text-xs w-full h-[55px] rounded-[5px] pl-3 pr-[66px] bg-transparent border-white border-solid border-[2px]"
                  >
                  </input>
                  <button class="absolute top-0 right-0 text-white text-xs h-[55px] border-solid border-transparent border-[2px] w-[65px] font-bold p-2 cursor-pointer">
                    ENVIAR
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="hidden ml2:block">
            <h2 class="font-bold ml2:font-black text-[20px] leading-[1.7rem] mt-[20px] ml2:mt-0 ml2:text-[18px] mb-4 text-white">
              Parceiros
            </h2>
            <ul
              class="flex mb-[27px] list-none gap-8"
              style="flex-flow:row wrap;"
            >
              {partners.map((partner) => (
                <li class="max-w-[250px] mb-3">
                  {partner.image &&
                    <Image
                      class={`${`max-w-[${partner.width}] max-h-[${partner.height}] my-3`}`}
                      src={partner.image}
                      alt="Imagem do parceiro"
                      width={partner.width || 160}
                      height={partner.height}
                    />
                  }
                  <span class="text-primary text-white text-xs leading-[1.4] pb-3 mb-3">
                    {partner.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      <section class="bg-[#031326] p-[50px]">
        <div class="px-4 ml2:px-[30px] xl:w-[1200px] max-w-[1280px] xl:mx-auto xl:px-0">
          <div>
            <h2 class="font-extrabold mb-5 uppercase text-white text-lg">
              Cursos
            </h2>
            <div class="pb-3">
              {courses.map((course) => (
                <div class="ml2:flex">
                  <a
                    class="text-white text-sm font-semibold ml2:w-[205px]"
                    href={course.titleUrl}
                  >
                    {course.title}
                  </a>
                  <div class="mb-5 ml2:ml-[60px] ml2:max-w-[70%]">
                    {course.content.map((item) => (
                      <a
                        class="text-white text-sm leading-[1.4] mr-1 ml2:mr-[2px]"
                        href={item.textUrl}
                      >
                        {item.text}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer class="hidden lg:block">
        <div class="bg-white h-[400px] border-t-[1px] border-t-solid border-[##EBEBEE]">
          <div class="flex justify-between items-start h-full xl:w-[1200px] max-w-[1280px] px-10 xl:mx-auto xl:px-0">
            <p class="inline-block text-[#657176] text-lg mt-[54px] w-[20%]">
              Alura
            </p>

            <ul class="flex list-none w-[80%] justify-between items-start mt-5">
              {footerColumns.map((column) => (
                <li class="inline-block pl-[19px] w-[240px] h-[350px] min-w-[160px] footerColumnBorder">
                  <p class="text-[10px] mb-[19px] font-semibold uppercase text-[#d7e0e5]">
                    {column.title}
                  </p>
                  <ul class="list-none">
                    {column.columnContent.map((item) => (
                      <li class="mb-[17px]">
                        <a
                          class="flex items-center text-[#657176]"
                          href={item.url}
                        >
                          {item.image &&
                            <Image
                              class="max-w-[30px] max-h-[30px]"
                              src={item.image}
                              alt="Ícone do item da coluna"
                              width={30}
                              height={30}
                            />
                          }
                          <span class="text-[11px] ml-[6px] inline-block text-center">
                            {item.text}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
