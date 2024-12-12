interface IItineraryLineDataType {
    name: {[key:string]: string}
    description: {[key:string]: string}
    Id: {[key:string]: string}
    day: {[key:string]: string}

}


interface IItineraryDetailDataType {
    M : IItineraryLineDataType   
}

interface IPackageDetailDataType {
    Id: number;
    Days: number;
    DurationDisplay: string;
    Itinerary: Array<IItineraryDetailDataType>;
    Name: string;
    LocationDescription: string;
    Tags: Array<string>;
}

interface ITestimonialDataType {
    Id: number;
    User: string;
    Content: string;
    Location: string;
}


export type { IPackageDetailDataType, IItineraryDetailDataType,  IItineraryLineDataType, ITestimonialDataType }