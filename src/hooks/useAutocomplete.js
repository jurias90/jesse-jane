import {useState , useEffect} from 'react'


function useAutocomplete(){

    const [inputRef, setInputRef] = useState(null)
    const [addressInfo, setAddressInfo] = useState(null)




    useEffect(() => {



    }, [inputRef]) 
    
    
    return [inputRef, addressInfo]
    
}

export default useAutocomplete∏