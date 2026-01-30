
interface LogoProps {
    variant?: "light" | "dark";
    size?: "sm" | "md" | "lg";
    showIcon?: boolean;
}

export function Logo({variant = "dark", size = "md", showIcon = true}: LogoProps) {
    const sizeClasses = {
        sm: {
            container: "gap-2",
            icon: "w-8 h-8",
            iconInner: "w-4 h-4",
            text: "text-[16px]",
            tech: "text-[16px]"
        },
        md: {
            container: "gap-3",
            icon: "w-10 h-10",
            iconInner: "w-5 h-5",
            text: "text-[20px]",
            tech: "text-[20px]"
        },
        lg: {
            container: "gap-4",
            icon: "w-14 h-14",
            iconInner: "w-7 h-7",
            text: "text-[28px]",
            tech: "text-[28px]"
        }
    }

    const colorClasses = {
        light: {
            iconBg: "bg-white/15",
            iconColor: "text-white",
            parkText: "text-white",
            techText: "text-white/80"
        },
        dark: {
            iconBg: "bg-[#1f4e79]",
            iconColor: "text-white",
            parkText: "text-[#1f4e79]",
            techText: "text-[#3c6fa3]"            
        }
    }
    return (
        <div className={`flex items-center ${sizeClasses[size].container}`}>
            {showIcon && (
                <div className={`${colorClasses[variant].iconBg} ${sizeClasses[size].icon} rounded-xl flex items-center justify-center shadow-sm`}>
                    <div className={`${colorClasses[variant].iconColor} ${sizeClasses[size].iconInner} bg-size[100%_auto] bg-center bg-no-repeat bg-[url('/parktech-icon.svg')]`}></div>
                </div>
            )}
            <div className="flex items-baseline">
                <span 
                    className={`${colorClasses[variant].parkText} font-bold ${sizeClasses[size].text}`}
                    style={{fontFamily: 'Poppins'}}>Park</span>
                <span 
                    className={`${colorClasses[variant].techText} font-bold ${sizeClasses[size].tech}`}
                    style={{fontFamily: 'Poppins'}}>Tech</span>
            </div>
        </div>
    )
}