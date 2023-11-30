export const validaEmail = (email) => {
    const expReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expReg.test(email);
}