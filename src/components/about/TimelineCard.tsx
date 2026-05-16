import { Card } from './Card';
import { TimelineItem } from '../../types/about';

interface TimelineCardProps {
  item: TimelineItem;
}

export function TimelineCard({ item }: TimelineCardProps) {
  return (
    <Card padding="large">
      <div className="flex items-center gap-3 mb-3">
        <p className="text-base font-semibold text-gray-900">
          {item.period}
        </p>
        <span className="text-gray-300">|</span>
        <p className="text-base font-semibold text-gray-900">
          {item.title}
        </p>
      </div>
      <div className="space-y-1 text-gray-600 leading-relaxed mt-3">
        {item.description.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </Card>
  );
}
