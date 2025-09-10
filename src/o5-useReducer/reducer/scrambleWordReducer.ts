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

     {type:"SET_GUESS",payload:string} 
    |{type:"CHECK_ANSWER"} 
    |{type:"SKIP_WORD"} 
    | {type:'START_NEW_GAME',pyload:ScrambleWordsState}




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

export const scrableWordsReducer=(state:ScrambleWordsState,action:ScrableWordsAction):ScrambleWordsState=>{
    switch(action.type){
        case 'SET_GUESS':
            return{
                ...state,
                guess:action.payload.trim().toUpperCase()
            }
        case 'CHECK_ANSWER':{
            if(state.currentWord===state.guess){
              const newWords=state.words.slice(1)
              return{
                  ...state,
                  words:newWords,
                  points:state.points+1,
                  guess:'',
                  currentWord:newWords[0],
                  scrambledWord:scrambleWord(newWords[0]),
              }
            }
            return{
                  ...state,
                  guess:'',
                  errorCounter:state.errorCounter+1,
                  isGameOver:state.errorCounter+1 >=state.maxAllowErrors
            }
        }
        case "SKIP_WORD":{
                  if (state.skipCounter >=state.maxSkips) return state
                  const updateWords=state.words.slice(1)
                  return{
                      ...state,
                      skipCounter:state.skipCounter+1,
                      words:updateWords,
                      currentWord:updateWords[0],
                      scrambledWord:scrambleWord(updateWords[0]),
                      guess:''
                  }
                   
        }

        case 'START_NEW_GAME':
                return action.pyload

        
        default:
            return state
    }
}