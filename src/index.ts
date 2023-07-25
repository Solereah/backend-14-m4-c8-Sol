import {
  getHourTempAndHumidity,
  getPressureByTemperature,
} from "./controller/controller"
const main = (): void => {
  const hourlyTempHumidity = getHourTempAndHumidity()
  const getPressureLevelByTemperature = getPressureByTemperature(20)
  console.table(hourlyTempHumidity)
  console.table(getPressureLevelByTemperature)
}
main()
