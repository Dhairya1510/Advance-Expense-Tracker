import React , {useEffect, useRef} from 'react'
import Details from './components/Details/Details'
import { Grid } from '@material-ui/core'
import { SpeechState, useSpeechContext} from '@speechly/react-client';
import useStyles from './styles'
import Main from './components/main/Main'
import {PushToTalkButton,PushToTalkButtonContainer, ErrorPanel} from '@speechly/react-ui'


const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null)


  const executeScroll = () => main.current.scrollIntoView();
  
  useEffect(() => {
    if(speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState])

  return (
    <div>
     <Grid container  className={classes.grid}>
       
       <Grid item             xs={12} sm={6} md={4} className={classes.income}>
         <Details title="Income"/>
       </Grid>

       <Grid item ref={main}  xs={12} sm={12} md={4} className={classes.main}>
         <Main />
       </Grid>
       
       <Grid item             xs={12} sm={6} md={4} className={classes.expense}>
         <Details title="Expense"/>
       </Grid>

     </Grid>
     <PushToTalkButtonContainer>
       <PushToTalkButton/>
       <ErrorPanel/>
     </PushToTalkButtonContainer>
    </div>
  )
}

export default App
