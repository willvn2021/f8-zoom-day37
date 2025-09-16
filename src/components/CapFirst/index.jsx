function CapFirst({ children: str }) {
    return str ? str.charAt(0).toLocaleUpperCase() + str.slice(1) : null;
}

export default CapFirst;
