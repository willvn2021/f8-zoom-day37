import LoadingSpinner from "../components/LoadingSpinner";

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

const withLoading = (WrappedComponent) => {
    const WithLoadingComponent = ({ isLoading, ...props }) => {
        if (isLoading) {
            return <LoadingSpinner />;
        }

        return <WrappedComponent {...props} />;
    };

    WithLoadingComponent.displayName = `withLoading(${getDisplayName(
        WrappedComponent
    )})`;

    return WithLoadingComponent;
};

export default withLoading;
