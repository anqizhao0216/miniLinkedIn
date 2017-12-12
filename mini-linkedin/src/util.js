// functions
export function getRedirectPath({type, avatar}) {
    let url = (type === 'boss') ? '/boss' : '/talent'
    if (!avatar) {
        url += 'info'
    }
    return url
}