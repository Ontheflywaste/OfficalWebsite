'use client';

import { useEffect, useState } from 'react';

export default function AnalyticsWrapper() {
  const [AnalyticsComponent, setAnalyticsComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    let isMounted = true;

    import('@vercel/analytics/react')
      .then((mod) => {
        if (isMounted) {
          setAnalyticsComponent(() => mod.Analytics);
        }
      })
      .catch(() => {
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!AnalyticsComponent) {
    return null;
  }

  return <AnalyticsComponent />;
}
