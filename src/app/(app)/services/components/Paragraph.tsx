export function Paragraph({ title, content }: { title: string; content: string }) {
  const normalizedContent = content.replace(/\\n/g, '\n')

  return (
    <div className="p-5 justify-center items-center rounded-lg shadow-none text-primary-darker">
      <h3 className="font-bold break-words pb-6">{title}</h3>
      <div>
        {normalizedContent.split('\n').map((line, i) => (
          <p key={i} className="mb-4">
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}
