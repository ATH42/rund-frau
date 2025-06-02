export function Paragraph({ title, content }: { title: string; content: string }) {
  return (
    <div className="p-5 justify-center items-center rounded-lg shadow-none text-primary-darker">
      <h3 className="font-bold wrap-break-word pb-6">{title}</h3>
      <p>
        {content.split('\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </p>
    </div>
  )
}
