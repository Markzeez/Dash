

import { Card, BarChart  } from '@tremor/react'

const chartdata = [
    {
        date: "Jan",
        Analysis: 700,
        
    },
    {
        date: "Feb",
        Analysis: 950,
        
    },
    {
        date: "Mar",
        Analysis: 800,
        
    },
    {
        date: "Apr",
        Analysis: 400,
        
    },
    {
        date: "May ",
        Analysis: 1000,
        
    },
    {
        date: "Jun ",
        Analysis: 550,
        
    },
    {
        date: "Jul",
        Analysis: 900,
    },
    {
        date: "Aug",
        Analysis: 300,
    },
    {
        date: "Sep",
        Analysis: 800,
    },
    {
        date: "Oct",
        Analysis: 600,
    },
    {
        date: "Nov",
        Analysis: 850,
        
    },
    {
        date: "Dec",
        Analysis: 600,
        
    },

];

const dataFormatter = (number: number | bigint ) => {
    return "" + Intl.NumberFormat("us").format(number).toString();
};

const AreaCharts = () => {
  return (
    <Card className='mt-3 max-w-[350px] lg:max-w-[640px] mx-auto items-center'>
               
                <BarChart
                className='h-72 mt-4'
                data={chartdata}
                index='date'
                categories={["Analysis"]}
                colors={["indigo"]}
                valueFormatter={dataFormatter}
                />
            </Card>
  )
}

export default AreaCharts