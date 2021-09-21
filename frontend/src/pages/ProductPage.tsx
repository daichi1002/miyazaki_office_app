import React from 'react'
import GenericTemplate from '../components/templates/GenericTemplates'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import TextField from '../components/molecules/TextField'
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'
import ExposureOutlinedIcon from '@material-ui/icons/ExposureOutlined'
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined'
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

const ProductPage: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      borderRadius: 20,
      height: 500,
      width: 500,
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
    body: {
      padding: 10,
      fontSize: 18,
    },
    icon: {
      paddingTop: 8,
    },
  }))
  const classes = useStyles()

  const rows = [
    { id: 1, product: 'インク', num: 5, price: 1000 },
    { id: 2, product: 'ペン', num: 20, price: 2000 },
    { id: 3, product: '飲み会', num: 1, price: 5000 },
    { id: 4, product: 'のり', num: 3, price: 100 },
    { id: 5, product: 'ボールペン', num: 10, price: 50 },
    { id: 6, product: '用紙', num: 1, price: 100 },
  ]
  const columns: GridColDef[] = [
    { field: 'id', headerName: '', width: 90 },
    {
      field: 'product',
      headerName: '商品',
      width: 110,
      editable: true,
    },
    {
      field: 'num',
      headerName: '個数',
      width: 110,
      editable: true,
    },
    {
      field: 'price',
      headerName: '金額',
      type: 'number',
      width: 110,
      editable: true,
    },
  ]

  return (
    <GenericTemplate title="商品ページ">
      <Container maxWidth="lg">
        <Grid container spacing={10} justify="center">
          <Grid item xs={12} md={6} sm={6}>
            <Paper elevation={3} className={classes.paper}>
              <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} className={classes.body}>
                  入力欄
                </Grid>
                <Grid item xs={4} className={classes.body}>
                  <AddShoppingCartOutlinedIcon className={classes.icon} />
                  商品名
                </Grid>
                <Grid item xs={8} className={classes.body}>
                  <TextField></TextField>
                </Grid>
                <Grid item xs={4} className={classes.body}>
                  <ExposureOutlinedIcon className={classes.icon} />
                  個数
                </Grid>
                <Grid item xs={8} className={classes.body}>
                  <TextField></TextField>
                </Grid>
                <Grid item xs={4} className={classes.body}>
                  <MonetizationOnOutlinedIcon className={classes.icon} />
                  金額
                </Grid>
                <Grid item xs={8} className={classes.body}>
                  <TextField></TextField>
                </Grid>
                <Grid item xs={6}>
                  <Button component="label">
                    <input
                      type="file"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                    />
                    <label htmlFor="contained-button-file">
                      <Button variant="contained" color="primary" component="span">
                        <AddAPhotoOutlinedIcon style={{ padding: 3 }} />
                        Upload
                      </Button>
                    </label>
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="outlined" color="primary" component="label">
                    入力確認
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <Paper elevation={3} className={classes.paper}>
              <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} className={classes.body}>
                  入力確認
                </Grid>
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                  />
                  <Button variant="outlined" color="primary" component="label">
                    確定する
                  </Button>
                </div>
                <Grid item xs={6}></Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </GenericTemplate>
  )
}

export default ProductPage
