// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { WeatherData } from '../../data/weatherdata'
import { GenerateWeatherData } from '../../services/weatherservice'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherData>
) {
  res.status(200).json(GenerateWeatherData());
}
