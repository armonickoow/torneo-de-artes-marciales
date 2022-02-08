let personajes = ( () =>{
    const url = "http://localhost:5500/dbz.json";
    const getData = async () =>{
        const rest = await fetch(url)
        const data = await rest.json()
        return data
    }

    return {getData};
}) ();

export default personajes;