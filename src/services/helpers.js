export const getMediaType = (setIsMobile) => {
    if (window.innerWidth < 1200 || document.documentElement.clientWidth < 1200) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
}

export const checkEmailValidity = (email, inputRef, setEmailSent) => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.match(regexEmail)) {
        setEmailSent(true)
    } else {
        inputRef.classList.add('input-error')
        setEmailSent(false)
    }
}

export const isFloat = (n) => {
    return Number(n) === n && n % 1 !== 0;
}