import {
  getHourlyTemperatureAndHumidity,
  getPressureLevelByTemperature,
} from "../model/model"
const getHourTempAndHumidity = () => getHourlyTemperatureAndHumidity()
const getPressureByTemperature = (temperature: number) =>
  getPressureLevelByTemperature(temperature)
export { getHourTempAndHumidity, getPressureByTemperature }
