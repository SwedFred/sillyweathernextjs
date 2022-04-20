import { WeatherData } from "../data/weatherdata"
import { randomInt } from "../helpers/randomint"

export const GenerateWeatherData = (): WeatherData => {
    return new WeatherData(randomInt(-40, 40), randomInt(0, 7), randomInt(0, 20), randomInt(0, 7), randomInt(0, 50));
}