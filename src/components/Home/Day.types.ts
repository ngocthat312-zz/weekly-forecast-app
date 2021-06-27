export interface WeatherInfo {
    applicable_date: string,
    min_temp: number,
    max_temp: number
}

export interface DayProps {
    weather: WeatherInfo
}