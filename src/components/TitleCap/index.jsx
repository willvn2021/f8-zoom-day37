function TitleCap({ children }) {
    if (typeof children !== "string" || !children) return null;

    return children.replace(
        /\w\S*/g,
        (word) => word.charAt(0).toLocaleUpperCase() + word.slice(1)
    );
}

export default TitleCap;
