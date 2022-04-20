export enum DirectionType { North, NorthEast, East, SouthEast, South, SouthWest, West, NorthWest }
export enum PerspirationType { Clear, Rain, Snow, Hail, Thunder }
export interface WeatherDescription { imageurl: string, description: string}

export class WeatherData {
    temperature: number;
    windDirection: DirectionType;
    windForce: number;
    perspiration: PerspirationType;
    perspirationAmount: number;

    constructor(_temperature: number, _windDirection: number, _windForce: number, _perspiration: number, _perspirationAmount: number) {
        this.temperature = _temperature;
        if (_windDirection > Object.keys(DirectionType).length)
            throw "Failed while attempting to generate weather data: not a valid wind direction type"
        this.windDirection = _windDirection;
        this.windForce = _windForce;
        if (_perspiration > Object.keys(PerspirationType).length)
            throw "Failed while attempting to generate weather data: not a valid perspiration type"
        this.perspiration = _perspiration;
        this.perspirationAmount = _perspirationAmount;
    }
}