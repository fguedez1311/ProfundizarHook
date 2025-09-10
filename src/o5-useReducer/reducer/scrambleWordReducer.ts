export interface ScrambleWordsState{
    errorCounter:number,
    guess:string,
    isGameOver:boolean,
    maxAllowErrors:number,
    currentWord:string,
    maxSkips:number,
    points:number,
    scrambledWord:string,
    skipCounter:number,
    words:string[],
    totalWords:number
}

export type ScrableWordsAction=

     {type:"NO_TENGO_LA_MENOR_IDEA_DE_CUAL_ACCIONES_NECESITO"} 
    |{type:"NO_TENGO_LA_MENOR_IDEA_DE_CUAL_ACCIONES_NECESITO2"} 
    |{type:"NO_TENGO_LA_MENOR_IDEA_DE_CUAL_ACCIONES_NECESITO3"} 




const GAME_WORDS = [
  'REACT',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'HTML',
  'ANGULAR',
  'SOLID',
  'NODE',
  'VUEJS',
  'SVELTE',
  'EXPRESS',
  'MONGODB',
  'POSTGRES',
  'DOCKER',
  'KUBERNETES',
  'WEBPACK',
  'VITE',
  'TAILWIND',
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
  return word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};

export const getInitialState=():ScrambleWordsState=>{
    const shuffledWords=shuffleArray([...GAME_WORDS])
    return{
        currentWord:shuffledWords[0],
        errorCounter:0,
        guess:'',
        isGameOver:false,
        maxAllowErrors:3,
        maxSkips:3,
        points:0,
        scrambledWord:scrambleWord(shuffledWords[0]),
        skipCounter:0,
        words:shuffledWords,
        totalWords:shuffledWords.length
    }
}

export const scrableWordsReducer=(state:ScrambleWordsState,action:ScrableWordsAction)=>{
    switch(action.type){
        default:
            return state
    }
}