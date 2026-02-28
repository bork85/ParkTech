import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface DashcardProps{
    title: string;
    value?: number | string;
    icon: LucideIcon;
    bgIconColor: string;
    iconColor: string;
}

export function DashCard({title, value, icon: Icon, bgIconColor, iconColor}: DashcardProps) {
  return (
    <div className="flex flex-row-reverse items-center justify-between w-full h-40 bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-col items-center justify-center p-4 w-15">
        <div className={cn("size-12 rounded-full flex items-center justify-center", bgIconColor)}>
          <Icon className={cn("size-6", iconColor)}/>
        </div>
      </div>
      <div>
        <p className="font-medium text-sm text-gray-500 mb-4">{title}</p>
        <p className="font-bold text-2xl text-gray-800">{value || 0}</p>
      </div>
    </div>
  );
}
