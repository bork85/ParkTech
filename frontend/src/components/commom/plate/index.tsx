
interface PlateProps {
    plateText: string;
    size?: "sm" | "lg";
}

export function Plate({ plateText, size = "sm" }: PlateProps) {
    const plateValue = plateText.toUpperCase();
    const sizePlate = size === "sm" ? true : false;
  return (
    sizePlate ? (
        <div className="m-1">
            <div className="w-fit min-w-21 h-8 border-2 border-black/80 rounded-sm ">
                <div className="h-full w-full px-1 py-0 border-t-4 border-blue-800">
                    <p className="font-semibold text-center text-sm text-black/80">{plateValue}</p>
                </div>
            </div>
        </div>
    ) : (
        <div className="m-1">
            <div className="w-fit min-w-44 h-17 border-3 border-black/80 rounded-lg bg-white">
                <div className="h-full w-full p-1 px-4 border-t-10 border-blue-800">
                    <p className="font-bold text-center text-5xl text-black/80">{plateValue}</p>
                </div>
            </div>
        </div>
    )
  );
}
