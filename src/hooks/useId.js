import { customAlphabet  } from "nanoid";

const useId = (prefix) => {
    
    const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10);

    return prefix + nanoid();
}
 
export default useId;