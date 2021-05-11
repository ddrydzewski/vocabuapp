export const getDate = () => {
    return new Date().toISOString().slice(0, 10);
}