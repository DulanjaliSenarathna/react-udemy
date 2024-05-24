import { createContext, useContext } from "react"

const AccordItemContext = createContext();

export function useAccodionItemContext(){

   const ctx = useContext(AccordItemContext);
   if(!ctx){
    throw new Error('AccordionItem related components must be wrapped by <Accordion.Item>');
   }
   return ctx;

}

export default function AccordionItem({id,className,children}){

    return (<AccordItemContext.Provider value={id}>
        <li className={className}>
        {children}
    </li>
    </AccordItemContext.Provider>)
}