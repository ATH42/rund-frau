import type { NextPage } from 'next'

const Team: NextPage = () => {
  return (
    <div className="w-[1260px] relative bg-white inline-flex flex-col justify-start items-start overflow-hidden">
      <div className="pr-52 pb-72 left-[769px] top-[5084px] absolute flex flex-col justify-end items-end gap-2.5">
        <div className="size-60 rounded-full border-4 border-light-orange" />
        <div className="size-20 rounded-full border-8 border-light-orange" />
        <div className="size-36 rounded-full border-8 border-light-orange" />
      </div>
      <div className="self-stretch h-16 px-32 py-2.5 bg-primary-dark shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] shadow-[0px_19px_10px_0px_rgba(0,0,0,0.02)] inline-flex justify-between items-center overflow-hidden">
        <img className="w-16 h-11" src="https://placehold.co/64x44" />
        <div className="flex justify-start items-center gap-12">
          <div
            data-property-1="Default"
            className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center gap-2.5"
          >
            <div className="text-center justify-start text-white text-base font-['DM_Sans'] leading-normal tracking-wide">
              Angebote
            </div>
          </div>
          <div data-property-1="Default" className="flex justify-center items-center gap-2.5">
            <div className="text-center justify-start text-white text-base font-['DM_Sans'] leading-normal tracking-wide">
              Kurse buchen
            </div>
          </div>
          <div data-property-1="Default" className="flex justify-center items-center gap-2.5">
            <div className="text-center justify-start text-white text-base font-['DM_Sans'] leading-normal tracking-wide">
              Team{' '}
            </div>
          </div>
          <div data-property-1="Default" className="flex justify-center items-center gap-2.5">
            <div className="text-center justify-start text-white text-base font-['DM_Sans'] leading-normal tracking-wide">
              Räume
            </div>
          </div>
          <div data-property-1="Default" className="flex justify-center items-center gap-2.5">
            <div className="text-center justify-start text-white text-base font-['DM_Sans'] leading-normal tracking-wide">
              FAQ
            </div>
          </div>
          <div data-size="48" className="relative overflow-hidden">
            <div className="size-3.5 left-[2.25px] top-[2.25px] absolute outline outline-2 outline-offset-[-1px] outline-white" />
          </div>
        </div>
      </div>
      <div className="self-stretch px-28 pt-28 pb-36 bg-primary-dark flex flex-col justify-center items-center gap-16">
        <div className="self-stretch flex flex-col justify-start items-center gap-20">
          <div className="w-[600px] flex flex-col justify-center items-center gap-6">
            <div className="self-stretch text-center justify-start text-white text-4xl font-['Ink_Blossoms'] text-header">
              Unser Team
            </div>
            <div className="self-stretch text-center justify-start text-white text-xl font-['DM_Sans'] leading-loose">
              Auf der Reise durch deine Schwangerschaft, Geburt und Wochenbett suchst du eine
              Hebamme, die dich sieht, im Blick behält und deinen Fähigkeiten vertraut. Begleitend
              tragen wir Hebammen unser Wissen, unsere Erfahrungen und das klassische Handwerk im
              Gepäck.
            </div>
          </div>
          <img className="w-72 h-52" src="https://placehold.co/290x202" />
          <div className="self-stretch h-0 outline outline-2 outline-offset-[-1px] outline-dark-purple" />
          <div className="self-stretch py-5 flex flex-col justify-start items-center gap-16">
            <div className="self-stretch text-center justify-start text-white text-4xl font-['Ink_Blossoms'] text-header">
              Vorsorge-, Geburts- und Wochenbetthebammen
            </div>
            <div className="self-stretch inline-flex justify-start items-start gap-16">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-6">
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch justify-start text-white text-xl font-['DM_Sans'] leading-loose text-header">
                    Andrea
                  </div>
                  <div className="self-stretch justify-start text-white text-xl font-['DM_Sans'] leading-loose">
                    Hebamme
                    <br />
                    Mobil: 0155 66394059
                    <br />
                    Mail: salome@geburtshaus-leipzig.de
                  </div>
                </div>
                <div className="self-stretch h-96 bg-primary-darker rounded-[20px]" />
                <div
                  data-style="Default"
                  className="shadow-[-4px_-4px_10px_0px_rgba(0,0,0,0.15)] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.15)] shadow-[0px_19px_10px_0px_rgba(0,0,0,0.04)] inline-flex justify-start items-start"
                >
                  <div
                    data-style="Filled"
                    className="px-5 py-3 bg-white rounded-[50px] flex justify-center items-center gap-2.5 overflow-hidden"
                  >
                    <div className="justify-start text-dark-purple text-base font-['DM_Sans'] leading-normal tracking-wide">
                      mehr erfahren
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch px-32 py-32 bg-primary-darker flex flex-col justify-center items-start gap-12">
        <div className="justify-start text-white text-4xl font-['Ink_Blossoms'] text-header">
          Kontaktiert uns.
        </div>
        <div className="inline-flex justify-start items-center gap-12">
          <div className="w-80 justify-start text-white text-xl font-['DM_Sans'] leading-10">
            Geburtshaus Rundfrau Leipzig GbR
            <br />
            Hebammen Andrea Held & Anne Halt
            <br />
            Mo bis Fr 9:00 - 11:00 Uhr
          </div>
          <div className="inline-flex flex-col justify-center items-start gap-2.5">
            <div className="inline-flex justify-start items-center gap-5">
              <div className="w-4 h-3.5 relative">
                <div className="w-4 h-3.5 left-0 top-0 absolute rounded-[0.83px] outline outline-[1.50px] outline-offset-[-0.75px] outline-white" />
                <div className="w-3 h-1 left-[15px] top-[7.50px] absolute origin-top-left -rotate-180 outline outline-[1.50px] outline-offset-[-0.75px] outline-white" />
              </div>
              <div className="w-80 justify-start text-white text-xl font-['DM_Sans'] leading-10">
                E-Mail
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch inline-flex justify-between items-end">
          <div className="flex justify-start items-center gap-12">
            <div data-property-1="Default" className="flex justify-center items-center gap-2.5">
              <div className="text-center justify-start text-white text-base font-['DM_Sans'] leading-normal tracking-wide">
                Impressum
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-4">
            <div data-property-1="Default" className="relative">
              <div data-size="40" className="left-0 top-0 absolute overflow-hidden">
                <div className="size-8 left-[3.33px] top-[3.33px] absolute outline outline-4 outline-offset-[-1.75px] outline-dark-purple" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
