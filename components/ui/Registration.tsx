interface Props {
    principalText: string;
    subText: string;
    buttonText: string;
    buttonUrl: string;
}

export default function Registration({ principalText, subText, buttonText, buttonUrl }: Props) {
    <div class="pb-12" style="background-image:linear-gradient(to bottom,transparent -35%,#093366 50%);">
        <div class="px-4">
            <div style={`background-image:url(/image/matricula-bg.svg); background-repeat:no-repeat; background-size:110% 120%; background-position:center;`} class="px-10 pt-10 pb-12 rounded-[5px] text-white text-center flex flex-col items-center">
                <div class="mb-8">
                    <p class="text-white text-[22px] font-bold">{principalText}</p>
                    <p class="text-white text-[22px]">{subText}</p>
                </div>
                <a href={buttonUrl} class="rounded-[32.5px] bg-white text-[#167bf7] py-5 px-[60px] uppercase font-bold cursor-pointer w-[17em]">
                    {buttonText}
                </a>
            </div>
        </div>
    </div>
}