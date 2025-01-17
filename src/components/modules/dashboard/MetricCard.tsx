import { cn } from "@/utils/general.util";
import { IconType } from "react-icons";
import { MdOutlineShowChart, MdOutlineTrendingDown } from "react-icons/md";

type IconColor = "yellow" | "green" | "indigo" | "orange";

interface MetricCardProps {
  title    : string;
  value    : number | string;
  icon     : IconType;
  iconColor: IconColor;
  trend    : {
    value     : number;
    text      : string;
    isPositive: boolean;
  };
  className?: string;
}

const MetricCard = (props: MetricCardProps) => {
  const { title, value, icon: Icon, iconColor, trend, className } = props;

  const formatNumber = (num: number | string) => {
    if (typeof num === "string") return num;
    return new Intl.NumberFormat().format(num);
  };

  const colorMap: Record<IconColor, { bg: string; text: string }> = {
    yellow: {
      bg  : "bg-yellow-400/30",
      text: "text-yellow-400",
    },
    green: {
      bg  : "bg-green-400/30",
      text: "text-green-400",
    },
    indigo: {
      bg  : "bg-indigo-400/30",
      text: "text-indigo-400",
    },
    orange: {
      bg  : "bg-orange-400/30",
      text: "text-orange-400",
    },
  };

  const iconBgClass = colorMap[iconColor]?.bg || "bg-gray-400";
  const iconTextClass = colorMap[iconColor]?.text || "text-gray-400";

  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center gap-5 bg-light-100 p-5 rounded-lg shadow",
        className
      )}
    >
      <div className="w-full flex justify-between items-center gap-5">
        <div className="flex flex-col gap-2">
          <span className="text-dark-100/70 font-medium">{title}</span>
          <span className="text-3xl font-medium text-dark-100/90">
            {formatNumber(value)}
          </span>
        </div>
        <div className={cn("p-3 rounded-3xl", iconBgClass)}>
          <Icon size={40} className={iconTextClass} />
        </div>
      </div>
      <p className="flex items-center gap-1 text-dark-100/80">
        <span
          className={cn(
            "flex items-center gap-1",
            trend.isPositive ? "text-green-500" : "text-red-500"
          )}
        >
          { trend.isPositive ? ( <MdOutlineShowChart size={16} /> ) : ( <MdOutlineTrendingDown size={16} /> ) }
          {Math.abs(trend.value)}%
        </span>
        {trend.text}
      </p>
    </div>
  );
};

export { MetricCard };
