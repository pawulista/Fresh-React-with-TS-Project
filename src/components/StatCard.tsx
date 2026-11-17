
interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: string;
}

const StatCard = ({
  title,
  value,
  description,
  icon,
}: StatCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md">

      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
        {icon}
      </div>

      {/* Title */}
      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      {/* Value */}
      <h3 className="mt-2 text-3xl font-bold text-slate-800">
        {value}
      </h3>

      {/* Description */}
      <p className="mt-2 text-xs text-slate-400">
        {description}
      </p>

    </div>
  );
};

export default StatCard;
