import { Card } from './Card';

interface ItemCardProps {
  title: string;
  description: string;
}

export function ItemCard({ title, description }: ItemCardProps) {
  return (
    <Card>
      <h3 className="text-base font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed mt-3">
        {description}
      </p>
    </Card>
  );
}
