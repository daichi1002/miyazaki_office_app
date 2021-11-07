import React from 'react'
import axios from 'axios'
import BodyCard from '../components/molecules/BodyCard'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import { Props } from '../components/molecules/BodyCard'

const HomePage: React.FC = () => {
  const [posts, setPosts] = React.useState([])
  const cardContent = {
    avatarUrl: 'https://joeschmoe.io/api/v1/random',
    imageUrl: 'https://picsum.photos/150',
  }

  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      setPosts(res.data)
    })
  }, [])

  const getCardContent = (getObj: Props) => {
    const bodyCardContent = { ...getObj, ...cardContent }
    return (
      <Grid item xs={12} sm={4} key={getObj.id}>
        <BodyCard {...bodyCardContent} />
      </Grid>
    )
  }

  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 300,
    },
  }))
  const classes = useStyles()
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {posts.slice(0, 3).map((contentObj) => getCardContent(contentObj))}
        </Grid>
      </Grid>
      <Box pt={4}></Box>
    </Container>
  )
}

export default HomePage
