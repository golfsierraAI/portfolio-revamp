export const getResumeData = async () => {
    let apiPromise = null;
    try {
        apiPromise = await fetch('https://illustrious-taiyaki-39729c.netlify.app/.netlify/functions/api');
    } catch {
        throw new Error("RESUME CAN'T BE LOADED DUE TO SOME SERVER ISSUE")
    }
    return apiPromise;
    
}