import { DirectionType, PerspirationType, WeatherData } from "../data/weatherdata"
import { randomInt } from "../helpers/randomint"

export const GenerateWeatherData = (): WeatherData => {
    return new WeatherData(randomInt(-20, 40), randomInt(0, 7), randomInt(0, 20), randomInt(0, 4), randomInt(0, 50));;
}