import { useEffect, useState } from "react";


export const PracticeSlider = () => {
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
        const showCard = () => {
            const width = window.innerWidth
            if (width >= 1024) setVissibleCards(3)
            else if (width >= 768) setVissibleCards(2)
            else setVissibleCards(1)
        }
        // runce one on mount
        showCard() 
        window.addEventListener("resize", showCard)
        return ()=> window.removeEventListener("resize", showCard)
    },[])

    const scroll=(dir: "left" |"right")=>{
        const maxIndex=testimonials.length-vissibleCards
        let newIndex=dir==="left"? index-1:index+1
        if(newIndex<1) newIndex=0
        if(newIndex>maxIndex)newIndex=maxIndex
        setIndex(newIndex)
    }

    
    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="relative overflow-hidden">
                {index>0 &&(
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white w-10 h-10 flex justify-center items-center hover:bg-gray-100 rounded-lg">
                        ◀
                    </div>
                )}
                <div
                className={`flex transition-transform duration-500 ease-in-out translate-x-[-${index*(100/vissibleCards)}%]`}
                >
                    {testimonials.map((item, i)=>(
                        <div key={i}>
                            </div>
                    ))}
                </div>

            </div>

        </div>
    )
}
