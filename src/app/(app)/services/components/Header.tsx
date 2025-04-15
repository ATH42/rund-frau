import Image from 'next/image'

export function Header({
  title,
  image,
  subtitle,
}: {
  title: string
  image: string
  subtitle: string
}) {
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center gap-6 p-6 py-20 ">
        <>
          <h1 className=" text-center text-primary-darker font-ink-blossoms text-header">
            {title}
          </h1>
          <p className="md:w-1/2 text-center text-primary-darker text-content wrap-break-words">
            {subtitle}
          </p>
        </>
        <Image
          width={1000}
          height={20}
          className="w-120 h-120"
          src={image}
          alt={image.toString()}
        />
      </section>
    </>
  )
}
