import { Component, ErrorInfo, ReactNode } from 'react';
import { logError } from './errorBoundaryService';

interface ErrorProps {
  children: ReactNode;
  fallback: JSX.Element;
}

interface ErrorState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    logError(
      JSON.stringify({ message: error.message, stack: error.stack, ...info })
    );
    this.setState({ hasError: true });
  }

  render(): ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;
    // You can render any custom fallback UI
    if (hasError) {
      return this.props.fallback;
    }
    return children;
  }
}

export default ErrorBoundary;
