import db from "../database/database.json"
type formatTime = `${string}-${string}-${string}:${string}:${string}`

const getHourlyTemperatureAndHumidity = () => {
  const result = db.timelines.hourly.map((element) => {
    const { time, values } = element
    return {
      time,
      humdity: values.humidity,
      temperattur: values.temperature,
    }
  })
  return result
}

const getPressureLevelByTemperature = (temperature: number) => {
  const result = db.timelines.hourly
    .filter((element) => element.values.temperature >= temperature)
    .map((element) => {
      return {
        pressureSurfaceLevel: element.values.pressureSurfaceLevel,
        temperature: element.values.temperature,
      }
    })

  return result
}
export { getHourlyTemperatureAndHumidity, getPressureLevelByTemperature }

/*  
Retorna una collection cuyos objetos son `{time: '2023-07-21T14:00:00Z', humidity: 86, temperature: 13.26}`.
- `getPressureLevelByTemperature(temperature)` => Retorna una collection en la que la propiedad `temperature` de los objetos sea igual o mayor al valor `temperature` recibido por parámetro. Los objetos que conformen esta collection tienen que tener la forma `{pressureSurfaceLeve: 1009.62, temperature: 21.25}`.*/
