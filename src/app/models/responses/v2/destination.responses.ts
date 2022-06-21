import { Destination } from "../../interfaces/destination.interfaces";

export interface TopFiveDestinationsResponse {
    new_destinations: Destination[],
    updated_destinations: Destination[],
    destinations: Destination[]
}