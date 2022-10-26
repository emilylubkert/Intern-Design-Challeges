import { createContext, useContext } from 'react';

const InsultContext = createContext();

//wrapper
function InsultProvider({ children }) {
    return (
        <InsultContext.Provider value={
            {
                insults: [
                    {                    
                        id: 1,
                        username: "ebchameleon",
                        insult: "If laughter is the best medicine, my professors face must be curing the world.",
                        school: "UCSB",
                        subject: "Environmental Science",
                        rating: 3
                    },
                    {                    
                        id: 2,
                        username: "ebcruz",
                        insult: "My TA is so fake, Barbie is jealous.",
                        school: "CSULA",
                        subject: "Math",
                        rating: 4
                    },
                    {    
                        id: 3,                
                        username: "ebchameleon",
                        insult: "If laughter is the best medicine, my professors face must be curing the world.",
                        school: "UCSB",
                        subject: "Environmental Science",
                        rating: 3
                    },
                    {   
                        id: 4,                
                        username: "ebchameleon",
                        insult: "If laughter is the best medicine, my professors face must be curing the world.",
                        school: "UCSB",
                        subject: "Environmental Science",
                        rating: 3
                    },
                    {   
                        id: 5,                
                        username: "ebchameleon",
                        insult: "If laughter is the best medicine, my professors face must be curing the world.",
                        school: "UCSB",
                        subject: "Environmental Science",
                        rating: 3
                    },
                    {    
                        id: 6,              
                        username: "ebchameleon",
                        insult: "If laughter is the best medicine, my professors face must be curing the world.",
                        school: "UCSB",
                        subject: "Environmental Science",
                        rating: 3
                    },
                    {   
                        id: 7,             
                        username: "ebchameleon",
                        insult: "If laughter is the best medicine, my professors face must be curing the world.",
                        school: "UCSB",
                        subject: "Environmental Science",
                        rating: 3
                    },
                    
                ]
            }
        } >
            {children}
        </InsultContext.Provider>
    );
}

function useInsults() {
    return useContext(InsultContext);
}

export { InsultProvider, useInsults };