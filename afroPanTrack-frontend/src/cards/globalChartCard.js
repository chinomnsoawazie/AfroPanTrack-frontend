import React, { Component } from 'react'
import {VictoryLabel, VictoryAxis, VictoryLine} from 'victory'


export class GlobalChartCard extends Component {

  

  render() {
    const styles = this.getStyles();
    const newCasesData = this.getNewCasesData();
    const deathsData = this.getDeathsData();
    const recoveredData = this.getRecoveredData();
    const tickValues = this.getTickValues();

    console.log(this.props.globalChartData ? this.props.globalChartData : 'data not yet here')
    return (
      <svg style={styles.parent} viewBox="0 0 450 350">

        {/* Create stylistic elements */}
        <rect x="0" y="0" width="10" height="10" fill="#f01616"/>
        {/* <rect x="420" y="10" width="20" height="20" fill="#458ca8"/> */}

        {/* Define labels */}
        <VictoryLabel x={25} y={24} style={styles.title}
          text="Global moving average for new infections, deaths, and recovery"
        />
        {/* <VictoryLabel x={430} y={20} style={styles.labelNumber}
          text="1"
        /> */}
        <VictoryLabel x={25} y={55} style={styles.labelOne}
          text={"New Cases"}
        />
        <VictoryLabel x={53} y={65} style={styles.labelTwo}
          text={"Deaths"}
        />

        <VictoryLabel x={68} y={75} style={styles.labelThree}
          text={"Recovered"}
        />

        <g transform={"translate(0, 100)"}>
          {/* Add shared independent axis */}
          <VictoryAxis
            scale="time"
            standalone={false}
            style={styles.axisYears}
            tickValues={tickValues}
            tickFormat={
              (x) => {
                // debugger
                if (x.getFullYear() === 2000) {
                  return x.getFullYear();
                }
                if (x.getFullYear() % 5 === 0) {
                  return x.getFullYear().toString().slice(2);
                }
              }
            }
          />

          {/*
            Add the dependent axis for the first data set.
            Note that all components plotted against this axis will have the same y domain
          */}
          <VictoryAxis dependentAxis
            domain={[0, 2000000]}
            offsetX={90}
            orientation="left"
            standalone={false}
            style={styles.axisOne}
          />

          {/* dataset newCases*/}
          <VictoryLine
            data={newCasesData}
            domain={{
              x: [new Date(2020, 5, 1), new Date(2020, 7, 1)],
              y: [0, 2000000]
            }}
            interpolation="monotoneX"
            scale={{x: "time", y: "linear"}}
            standalone={false}
            style={styles.lineOne}
          />


          {/* dataset Deaths*/}
          <VictoryLine
            data={deathsData}
            domain={{
              x: [new Date(2020, 5, 1), new Date(2020, 7, 1)],
              y: [0, 2000000]
            }}
            interpolation="monotoneX"
            scale={{x: "time", y: "linear"}}
            standalone={false}
            style={styles.lineTwo}
          />

          {/* dataset Recovered*/}
          <VictoryLine
            data={recoveredData}
            domain={{
              x: [new Date(2020, 5, 1), new Date(2020, 7, 1)],
              y: [0, 2000000]
            }}
            interpolation="monotoneX"
            scale={{x: "time", y: "linear"}}
            standalone={false}
            style={styles.lineThree}
          />
        </g>
      </svg>
    );
  }

  getNewCasesData() {
    if(this.props.globalChartData){
      return this.props.globalChartData.map(day => {
        return {x: new Date(parseInt(day.year), parseInt(day.month), parseInt(day.day)), y: parseInt(day.new_infections)}
      })
    }
  }

  getDeathsData() {
    if(this.props.globalChartData){
      return this.props.globalChartData.map(day => {
        return {x: new Date(parseInt(day.year), parseInt(day.month), parseInt(day.day)), y: parseInt(day.deaths)}
      })
    }
  }

  getRecoveredData() {
    if(this.props.globalChartData){
      return this.props.globalChartData.map(day => {
        return {x: new Date(parseInt(day.year), parseInt(day.month), parseInt(day.day)), y: parseInt(day.recovered)}
      })
    }
  }

  getTickValues() {

    if(this.props.globalChartData){
      return this.props.globalChartData.map(day => {
        return new Date(parseInt(day.year), parseInt(day.month), parseInt(day.day))
      })
    }
  }

  getStyles() {
    const BLUE_COLOR = "#00a3de";
    const RED_COLOR = "#7c270b";
    const GREEN_COLOR = '#008000'

    return {
      parent: {
        background: "#ccdee8",
        boxSizing: "border-box",
        display: "inline",
        padding: 0,
        fontFamily: "'Fira Sans', sans-serif"
      },
      title: {
        textAnchor: "start",
        verticalAnchor: "end",
        fill: "#000000",
        fontFamily: "inherit",
        fontSize: "10px",
        fontWeight: "bold"
      },
      labelNumber: {
        textAnchor: "middle",
        fill: "#ffffff",
        fontFamily: "inherit",
        fontSize: "14px"
      },

      // INDEPENDENT AXIS
      axisYears: {
        axis: { stroke: "black", strokeWidth: 1},
        ticks: {
          size: ({ tick }) => {
            const tickSize =
              tick.getFullYear() % 5 === 0 ? 10 : 5;
            return tickSize;
          },
          stroke: "black",
          strokeWidth: 1
        },
        tickLabels: {
          fill: "black",
          fontFamily: "inherit",
          fontSize: 8
        }
      },

      // DATA SET ONE
      axisOne: {
        grid: {
          stroke: ({ tick }) =>
            tick === -10 ? "transparent" : "#ffffff",
          strokeWidth: 2
        },

        
        axis: { stroke: BLUE_COLOR, strokeWidth: 0 },
        ticks: { strokeWidth: 0 },
        tickLabels: {
          fill: BLUE_COLOR,
          fontFamily: "inherit",
          fontSize: 8
        }
      },
      labelOne: {
        fill: BLUE_COLOR,
        fontFamily: "inherit",
        fontSize: 9,
        fontStyle: "italic"
      },
      lineOne: {
        data: { stroke: BLUE_COLOR, strokeWidth: 1}
      },
      axisOneCustomLabel: {
        fill: BLUE_COLOR,
        fontFamily: "inherit",
        fontWeight: 10,
        fontSize: 8
      },

      // DATA SET TWO
      axisTwo: {
        axis: { stroke: RED_COLOR, strokeWidth: 0 },
        tickLabels: {
          fill: RED_COLOR,
          fontFamily: "inherit",
          fontSize: 8
        }
      },
      labelTwo: {
        textAnchor: "end",
        fill: RED_COLOR,
        fontFamily: "inherit",
        fontSize: 9,
        fontStyle: "italic"
      },
      lineTwo: {
        data: { stroke: RED_COLOR, strokeWidth: 1 }
      },

      //DATA SET THREE
      axisThree: {
        axis: { stroke: GREEN_COLOR, strokeWidth: 0 },
        tickLabels: {
          fill: GREEN_COLOR,
          fontFamily: "inherit",
          fontSize: 8
        }
      },
      labelThree: {
        textAnchor: "end",
        fill: GREEN_COLOR,
        fontFamily: "inherit",
        fontSize: 9,
        fontStyle: "italic"
      },
      lineThree: {
        data: { stroke: GREEN_COLOR, strokeWidth: 1 }
      },

      // HORIZONTAL LINE
      lineFour: {
        data: { stroke: "#e95f46", strokeWidth: 2 }
      }
    };
  }

}

export default GlobalChartCard
