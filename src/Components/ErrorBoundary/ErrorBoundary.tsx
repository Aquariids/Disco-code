import { Component } from "react";

class ErrorBoundary extends Component<any> {
    state = {
        error: null,
    };
    static getDerivedStateFromError(error: any) {
        return { error };
    }
    render():any {
        const { error }:any = this.state;

        if (error) {
            return (
                <div>
                    <p>Seems like an error occured!</p>
                    <p>{error.message}</p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;