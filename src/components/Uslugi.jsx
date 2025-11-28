const UslugiComponent =() => {
    return(
    <div className="w-145 text-pretty ml-25 flex ">
            <div className="mt-50">
                <h1 className="font-semibold text-7xl capitalize text-[#495E4C]">Предоставляемые</h1>
                <h1 className="font-semibold text-7xl capitalize text-[#495E4C]">услуги</h1>
                <p className="font-normal text-xl text-[#848484] mt-10">При разработке проекта предложим техническое решение
                оптимальное по соотношению цены и качества, оно идеально впишется в ваш дизайн, а также будет учитывать все ваши пожелания.</p>
                <p className="font-normal text-xl text-[#848484] mt-10">Монтаж выполняется опытными бригадами с соблюдением всех действующих технических норм, правил безопасности и строго по согласованному проекту.</p>
                <p className="font-normal text-xl text-[#848484] mt-10">Одинаково эффективно выполняем проектирование и монтаж на объектах любой сложности – от небольшой квартиры, до объектов со сложными 
                технологическими процессами на основе действующей нормативной документации.</p>
            </div>
            <div className="flex flex-col items-center ml-105 mt-25">
                <div className="flex rounded-t-[45px] flex-row px-3 pt-3 bg-[#D9FADD] w-fit">
                    <button id="ryj" className="text-[#7CA281] cursor-pointer font-normal flex gap-6 items-center px-6 py-4 rounded-tl-[40px] bg-[#FFFFFF]">Кондиционирование<img src="air.svg" alt="xdgj," className="w-[33px] h-[27px]"/></button>
                    <button id="ryj" className="text-[#FFFFFF] cursor-pointer font-normal flex gap-6 items-center px-6 py-4 rounded-tr-[40px] bg-[#5CCD6A]">Система Вентиляции<img src="Group.svg" alt="xdgj," className="w-[33px] h-[33px]"/></button>
                </div>
                <div className="bg-[#D9FADD] rounded-[65px] w-[676px] h-[655px] flex justify-between">
                    <div className="ml-[33px] mt-[127.13px] mb-[121.13px]  ">
                        <p className="flex text-[#495D4C] w-[307px] h-[60px] mt-[11px] "><img src="public/Group 20359 copy.svg"  className="w-[34px] h-[34px] mr-[15px]" />Проектирование систем вентиляции любой сложности</p>
                        <p className="flex text-[#495D4C] w-[307px] h-[60px] mt-[11px]"><img src="public/Group 20360.svg"  className="w-[34px] h-[34px] mr-[15px]" />Монтаж приточной вентиляции</p>
                        <p className="flex text-[#495D4C] w-[307px] h-[60px] mt-[11px]"><img src="public/Group 20361.svg"  className="w-[34px] h-[34px] mr-[15px]" />Монтаж вытяжной вентиляции</p>
                        <p className="flex text-[#495D4C] w-[307px] h-[60px] mt-[11px]"><img src="public/Group 20362.svg"  className="w-[34px] h-[34px] mr-[15px]" />Монтаж вентиляции с увлажнением воздуха</p>
                        <p className="flex text-[#495D4C] w-[307px] h-[60px] mt-[11px]"><img src="public/Group 20363.svg"  className="w-[34px] h-[34px] mr-[15px]" />Монтаж вентиляции с рекуператором</p>
                        <p className="flex text-[#495D4C] w-[307px] h-[60px] mt-[11px]"><img src="public/Group 20364.svg"  className="w-[34px] h-[34px] mr-[15px]" />Монтаж вентиляции с осушением для бассейна</p>
                    </div>
                    <img src="public/Rectangle 4285.svg" alt="fklb" className="object-cover rounded-tr-[71px] rounded-br-[70px]"/>
                </div>
            </div>
        </div>
    )
}
export default UslugiComponent