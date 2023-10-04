import createClient,{FetchOptions} from "openapi-fetch";
import { FilterKeys } from "openapi-typescript-helpers";
import { paths } from "@/lib/api/v1";

const cli = createClient<paths>({ baseUrl: "127.0.0.1:4041" });

type AAA = FetchOptions<FilterKeys<paths["/WeatherForecast"], "get">>

export async function fetcher() {
    let aaa: AAA = never;
    const { data, error } = await cli.GET("/WeatherForecast", aaa);
    console.log(error);
    console.log(data);
} 