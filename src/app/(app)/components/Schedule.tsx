import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion'

const faqData = [
    {
        id: 1,
        question: 'Is it accessible?',
        answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
        id: 2,
        question: 'How do I reset my password?',
        answer: "You can reset your password by clicking on 'Forgot Password' at the login page.",
    },
    {
        id: 3,
        question: 'Where can I find the user manual?',
        answer: "The user manual can be found in the 'Help' section of the website.",
    },
    {
        id: 4,
        question: 'What payment methods are accepted?',
        answer: 'We accept credit cards, PayPal, and bank transfers.',
    },
    {
        id: 5,
        question: 'How can I contact support?',
        answer: 'You can contact support via email at support@example.com.',
    },
]

export function Schedule() {
    return (
        <section className="bg-secondary-dark flex w-full items-center justify-center p-6 md:flex-col md:p-12">
            <Accordion type="single" collapsible>
                {faqData.map((item) => (
                    <AccordionItem
                        key={item.id}
                        value={`item-${item.id}`}
                        className="w-full rounded-2xl bg-[#DEABBF]"
                    >
                        <AccordionTrigger className="px-4">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-4">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}
