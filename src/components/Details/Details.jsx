import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2';
import  useStyle from './styles';
import useTransactions from '../../useTransactions';

const Details = ({title}) => {
  const classes = useStyle();
  const {total , chartData } = useTransactions(title);

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">{total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  )
}

export default Details
