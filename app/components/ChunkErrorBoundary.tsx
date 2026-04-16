'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  isRetrying: boolean;
}

export default class ChunkErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, isRetrying: false };
  }

  static getDerivedStateFromError(error: Error): State | null {
    const errorMessage = error?.message || '';
    const isChunkError =
      error?.name === 'ChunkLoadError' ||
      errorMessage.includes('Loading chunk') ||
      errorMessage.includes('Failed to fetch dynamically imported module') ||
      errorMessage.includes('Importing a module script failed');

    if (isChunkError) {
      return { hasError: true, isRetrying: false };
    }
    return null;
  }

  componentDidCatch(error: Error) {
    const errorMessage = error?.message || '';
    const isChunkError =
      error?.name === 'ChunkLoadError' ||
      errorMessage.includes('Loading chunk') ||
      errorMessage.includes('Failed to fetch dynamically imported module') ||
      errorMessage.includes('Importing a module script failed');

    if (isChunkError && !this.state.isRetrying) {
      this.setState({ isRetrying: true });
      window.location.reload();
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="text-center p-8">
            <div className="animate-spin w-8 h-8 border-4 border-[#16a34a] border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-gray-600">Loading latest version...</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
