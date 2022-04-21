import { DirectionType, PerspirationType, WeatherData, WeatherDescription } from "../data/weatherdata"
import { randomInt } from "./randomint"

export const GenerateWeatherDescriptions = (weather: WeatherData): WeatherDescription[] => {
    const weatherDescs: WeatherDescription[] = [
        GenerateTemperatureDescription(weather.temperature),
        GenerateWindDescription(weather.windForce, weather.windDirection),
        GeneratePercipationDescription(weather.perspiration, weather.perspirationAmount),
        GenerateSpecial()
    ]
    return weatherDescs;
}

const GenerateTemperatureDescription = (temperature: number): WeatherDescription => {
    if (temperature < -20)
        return {imagepath: 'verycold', description: `${temperature}°C degrees, warning for extreme cold!`}
    if (temperature < 0)
        return {imagepath: 'cold', description: `${temperature}°C degrees, expect ice`}
    if (temperature > 30)
        return {imagepath: 'verywarm', description:`${temperature}°C degrees, warning for extreme heat!`}
    return {imagepath: 'sunny', description: `${temperature}°C degrees`}
}

const GenerateWindDescription = (windForce: number, windDirection: DirectionType): WeatherDescription => {
    const imgpath: string = 'wind'
    if (windForce === 0)
        return { imagepath: imgpath, description: 'The winds are still today'}

    let dir: string = DirectionType[windDirection];
    for(var i = 1; i < dir.length; i++) {
        if (dir[i] == dir[i].toUpperCase()) {
            var firstPart: string = dir.slice(0, i);
            var secondPart: string = dir.slice(i);
            dir = firstPart + ' ' + secondPart;
            break;
        }
    }
    
    return { imagepath: imgpath, description: `${windForce} m/s winds from the ${dir}`}
}

const GeneratePercipationDescription = (perspiration: number, perspirationAmount: number): WeatherDescription => {
    const length: number = Object.keys(PerspirationType).length;
    const rnd: number = randomInt(0,length);
    const imgpath: string = PerspirationType[rnd];
    switch (rnd) {
        case PerspirationType.Clear:
            return {imagepath: imgpath, description: 'Clear skies' }
        case PerspirationType.Cloudy:
            return {imagepath: imgpath, description: 'Partially cloudy'}
        case PerspirationType.Fog:
            return {imagepath: imgpath, description: 'Foggy'}
        case PerspirationType.Hail:
            return {imagepath: imgpath, description: `Expect ${perspirationAmount} mm of hail today`}
        case PerspirationType.Rain:
            return {imagepath: imgpath, description: `Expect ${perspirationAmount} mm of rain today`}
        case PerspirationType.Snow:
            return {imagepath: imgpath, description: `Expect ${perspirationAmount} mm of snow today`}
        case PerspirationType.Storm:
            return {imagepath: imgpath, description: `Expect ${perspirationAmount} mm of rain and thunderstorms`}
        case PerspirationType.Thunder:
            return {imagepath: imgpath, description: 'Thunder'}
        default:
            return {imagepath: '', description: ''}
    }
}

const GenerateSpecial = (): WeatherDescription => {
    const rnd = randomInt(0,100);
    if (rnd > 80)
        return { imagepath: 'rainbow', description: 'You might see a rainbow today!'}
    if (rnd < 20)
        return { imagepath: 'hurricane', description: 'Hurricane on the way, take shelter!' }
    return {imagepath: '', description: ''}
}