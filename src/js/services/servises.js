
const getRequst = async (url) => {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`ERROR url: ${url}, status: ${response.status}`)
    }
        
    return await response.json();
}

export default getRequst;

