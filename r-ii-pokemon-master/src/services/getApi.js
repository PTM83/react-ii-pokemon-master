export const getApi = async (url) => {

     try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
     } catch(error) {
        console.log(error)
        return [];
     }
}
