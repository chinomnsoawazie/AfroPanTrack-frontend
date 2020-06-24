import { SET_GLOBAL_DATA, SET_GLOBAL_CHART_DATA } from '../redux/actionTypes'

const initialState = {
    globalData: '',
    globalChartData: '',
}

const chartsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_GLOBAL_DATA:
        return {
            ...state,
            globalData: action.payload
        }

        case SET_GLOBAL_CHART_DATA:
        let fetchedGlobalCovidData = action.payload        
        let transformedGlobalCovidData = Array.from(new Set(fetchedGlobalCovidData.map(day => {
            if(day.length != 0){
                return {
                    day: day.date.split("-")[2],
                    year: day.date.split("-")[0],
                    month: day.date.split("-")[1],
                    deaths: day.deaths_diff,
                    new_infections:day.confirmed_diff,
                    recovered: day.recovered_diff,
                    deaths_to_date: day.deaths,
                    infections_to_date: day.confirmed,
                    recoveries_to_date: day.recovered
                }
            }
        })))

        //Quasi async function to wait till processing is done before sending 
        //data over to chart component
        if(transformedGlobalCovidData.length > 28){
            let finalDataSet = transformedGlobalCovidData.filter(day => day != undefined)
            return{
                ...state,
                globalChartData: finalDataSet
            }
        }

        default:
        return state
    }
}

export default chartsReducer