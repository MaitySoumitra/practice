import { useEffect, useState } from "react"

export const CustomSlider = () => {
    const [index, setIndex] = useState(0)
    const [vissibleCards, setVissibleCards] = useState(3)

    const testimonials = [
        {
            name: "Sam Jais",
            review:
                "I had a very wonderful exprince with ahaan software they created our clothing brand website heliclothing( mens lcasual wear) Really apriciated their work",
            rating: 5,
            color: "#f7a500",
            image: "https://ahaanmedia.com/ahaanwebsite/testimonial/1.webp",
        },
        {
            name: "Samuel Watson",
            review:
                "Good designing & development company. Recently, they have designed my website and currently doing marketing for Solar Installation services. Work quality is excellent and they met my expectations. Thanks to your entire team. 👍",
            rating: 5,
            color: "#4CAF50",
            image: "https://ahaanmedia.com/ahaanwebsite/testimonial/3.webp",
        },
        {
            name: "Rosanna Feyerabend",
            review:
                "Disciplined job and are ethically trustworthy. The team of this company are always available for inquiries and questions, and they provide support, key insight, ideas and direction when possible. I think they have a good team, well organized and efficient with their time. Nice experience with this company that designed my business website.",
            rating: 5,
            color: "#f44336",
            image: "https://ahaanmedia.com/ahaanwebsite/testimonial/2.webp",
        },
        {
            name: "Aman Jaiswal",
            review:
                "We partnered with this company for both social media branding and website development, and the results have been fantastic. Our business conversions increased by 50% thanks to their effective strategies and high-quality work. The team is knowledgeable, creative, and results-driven. Highly recommended for any business looking to grow!",
            rating: 5,
            color: "#2196F3",
            image: "https://ahaanmedia.com/ahaanwebsite/testimonial/7.webp",
        },
        {
            name: "Dennis Johnson",
            review:
                "These guys did a wonderful job and very quickly, the page was so nice, I already hired them to redo the whole site. will use again and again",
            rating: 5,
            color: "#f7a500",
            image: "https://ahaanmedia.com/ahaanwebsite/testimonial/6.webp",
        },
        {
            name: "Valynn Johnson",
            review:
                "All I can say is WOW. This company did exactly what they said they would do and went over the top with ideas to better my Website. THANK YOU!!",
            rating: 5,
            color: "#4CAF50",
            image: "https://ahaanmedia.com/ahaanwebsite/testimonial/5.webp",
        },
        {
            name: "Dr. Kunal Dey",
            review:
                "It was a great experience to work with Vishal, he did the job beyond my expectations, highly recommend. Easy to communicate with and on time , I would actually say before time. Will hire him again!",
            rating: 5,
            color: "#f44336",
            image: "https://ahaanmedia.com/ahaanwebsite/testimonial/4.webp",
        },
    ];


    useEffect(() => {
        const updateVissibleCards = () => {
            const width = window.innerWidth
            if (width >= 1024) setVissibleCards(3)
            else if (width >= 768) setVissibleCards(2)
            else setVissibleCards(1)
        }
        updateVissibleCards()
        window.addEventListener("resize", updateVissibleCards)
        return () => window.removeEventListener("resize", updateVissibleCards)
    })

    const scroll = (dir) => {
        const maxIndex = testimonials.length - vissibleCards
        let newIndex = dir === "left" ? index - 1 : index + 1
        if (newIndex < 0) newIndex = 0
        if (newIndex > maxIndex) newIndex = maxIndex
        setIndex(newIndex)
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="relative overflow-hidden">
                {index > 0 && (
                    <button
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow flex justify-center items-center z-20 hover:bg-gray-100"
                        onClick={() => scroll("left")}
                    >
                        ◀
                    </button>
                )}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${index * (100 / vissibleCards)}%)`
                    }}
                >
                    {
                        testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4"
                            >
                                <div className="relative bg-white rounded-xl shadow p-6 flex flex-col h-full">
                                    <div className="flex-1 flex flex-col justify-between z-10">
                                        <p className="text-lg font-bold">{t.name}</p>
                                        <p className="text-gray-700 text-sm mb-4">{t.review}</p>
                                        <div className="flex space-x-1 text-md">
                                            {Array(5).fill(0).map((_, j) => (
                                                <span key={j} style={{ color: j < t.rating ? t.color : "#ccc" }}>⭐</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full border-full border-4 border-current overflow-hidden flex items-center justify-center" style={{ borderColor: t.color }}>
                                        <img src={t.image} alt={t.name} className="w-full h-full object-contain rounded-full" />
                                    </div>

                                </div>
                            </div>
                        ))}
                </div>
                {index < testimonials.length - vissibleCards && (
                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow flex justify-center items-center z-20 hover:bg-gray-100"
                        onClick={() => scroll("right")}
                    >
                        ▶
                    </button>
                )}
            </div>
        </div>
    )
}