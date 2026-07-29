

export const AnimatedIcon = () => {
    return (
        <div>
            <style>{
                `@keyframes drawStroke{
            to{
            stroke-dashoffset:0;
            }
            }
            .icon rect, .icon path{
            stroke-dasharray:70;
            stroke-dashoffset:70;
            }
            .wrapper:hover .icon path,
            .wrapper:hover .icon rect{
            animation:drawStroke 1.8s ease forwards;
            }
            
            `}
            </style>
            <div className="wrapper flex items-center justify-center w-40 h-40">
                <svg
                    className="w-20 h-20 icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="2.5" y="4" width="19" height="15.6" rx="1.5" />
                    <path d="M6.5 9.3l3.2 2.7-3.2 2.7" />
                    <path d="M12.3 14.7h5.2" />

                </svg>
            </div>
        </div>
    )
}
