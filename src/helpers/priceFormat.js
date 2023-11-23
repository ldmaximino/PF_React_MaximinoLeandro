export const priceFormat = (precio) => {
    return precio.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }); //da formato al precio unitario
}
