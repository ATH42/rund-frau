import Image from 'next/image'

export function Header({ image, subtitle }: { image: string; subtitle: string }) {
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center gap-6 p-6 py-20 ">
        <>
          <h1 className=" text-center text-white font-ink-blossoms text-header">Unser Team</h1>
          <p className="md:w-1/2  text-center text-white text-content ">{subtitle}</p>
        </>
        <Image
          width={1000}
          height={20}
          className="w-72 h-52 mt-8"
          src={image}
          alt={image.toString()}
        />
      </section>
    </>
  )
}
