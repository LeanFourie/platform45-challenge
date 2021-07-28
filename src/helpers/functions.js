// Lowercase and join text
export const lowercaseText = (text, operator) => {
    return operator === undefined
        ? text.toLowerCase().split(' ').join('-')
        : text.toLowerCase().split(' ').join(operator)
}

// Uppercase text
export const capitalizeText = (str, lower = false) => {
    return (lower ? str.toLowerCase() : str)
        .replace(/_/g, ' ')
        .replace(/-/g, ' ')
        .replace(/\//g, ' ')
        .replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase())
}

// Check window size based on query
export const checkWindowWidth = ( size ) => {
    if ( window.matchMedia(`(max-width: ${ size }px)`).matches ) {
        return true
    }

    return false
}
