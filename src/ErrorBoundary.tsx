import React from "react";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import Heading from "./components/Heading/Heading";
import Paragraph from "./components/Paragraph/Paragraph";

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div style={{ padding: "1rem", textAlign: "center" }}>
            <Heading text="Something went wrong." />
            <Paragraph text="Try refreshing the page or contact support if the issue persists." />

            <ButtonComponent
              label="Retry"
              variant="contained"
              onClick={() => this.setState({ hasError: false })}
            />
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
