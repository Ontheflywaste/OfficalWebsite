interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="bg-surface-card p-8 rounded-xl text-center shadow-lg border border-surface-card-border hover:border-primary transition-all">
      <div className="text-6xl font-bold text-primary mb-3">{value}</div>
      <div className="text-ink font-semibold text-lg">{label}</div>
    </div>
  );
}
