export interface Thumbnail {
    image_type: string;
    image_url: string;
}

export interface DestinationVideo {
    url: string;
    thumbnail: Thumbnail;
}

export interface Description {
    id: number;
    object_id: number;
    object_type: string;
    description_type: string;
    text: string;
    language_code: string;
    translated: number;
}

export interface Destination {
    id: number;
    city: string;
    country_name: string;
    airport_name: string;
    country_code: string;
    latitude: number;
    longitude: number;
    iata_code: string;
    iata_parent_id: number;
    is_enabled: string;
    temperature: number;
    original_destination_id: number;
    destination_video: DestinationVideo;
    adventure_flag: number;
    nightlife_flag: number;
    culture_flag: number;
    romantic_flag: number;
    food_flag: number;
    hot_flag: number;
    beach_flag: number;
    sports_flag: number;
    winter_sports_flag: number;
    chill_flag: number;
    off_grid_flag: number;
    winter_flag: number;
    thumbnail: Thumbnail;
    description: Description;
    top_fives_new_flag: number;
    top_fives_updated_flag: number;
}
export interface Activity {
    id: number;
    destination_id: number;
    name: string;
    city: string;
    country_code: string;
    country_name: string;
    currency_code: string;
    start_day?: number;
    start_year?: number;
    start_month?: number;
    end_day?: number;
    end_year?: number;
    end_month?: number;
    start_timestamp?: number;
    end_timestamp?: number;
    minimum_days: number;
    price: number;
    latitude: number;
    longitude: number;
    adventure_flag: number;
    nightlife_flag: number;
    culture_flag: number;
    romantic_flag: number;
    chill_flag: number;
    food_flag: number;
    hot_flag: number;
    beach_flag: number;
    sports_flag: number;
    winter_sports_flag: number;
    off_grid_flag: number;
    winter_flag: number;
    type: string;
    booking_url: string;
    tripadvisor_url: string;
    is_enabled: string;
    provider: string;
    thumbnail: Thumbnail;
    description: Description;
    top_fives_position: number;

}

