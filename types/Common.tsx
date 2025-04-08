interface IItineraryLineDataType {
    name: { [key: string]: string };
    description: {
        S: string | string[];
        images?: { src: string; alt: string }[];
      };      
    Id: { [key: string]: string };
    day: { [key: string]: string };
}

interface IItineraryDetailDataType {
    M: IItineraryLineDataType;
}

interface IPackageDetailDataType {
    Id: number;
    Days: number;
    DurationDisplay: string;
    Itinerary: Array<IItineraryDetailDataType>;
    Name: string;
    LocationDescription: string;
    Tags: Array<string>;
    Title: string;
    Uri: string;
    Description: string;
    NoOfRatings: number;
    Ratings: number;
    Overview: string;
    Summary: string;
}

interface ITestimonialDataType {
    Id: number;
    User: string;
    Content: string;
    Location: string;
    Img: string;
}

// Blog structure interfaces
interface IBlogLink {
    text: string;
    url: string;
    key: string;
}

type IBlogLinks = IBlogLink[];

interface IBlogIntroduction {
    content: string;
    links?: IBlogLinks;
}

interface IBlogBulletPoint {
    title?: string;
    content: string;
}

interface IBlogSubheading {
    title: string;
    content: string;
    links?: IBlogLinks;
}

interface IBlogSection {
    heading: string;
    content?: string;
    links?: IBlogLinks;
    bullet_points?: Array<string | IBlogBulletPoint>;
    subheadings?: Array<IBlogSubheading>;
}

interface IBlogConclusion {
    heading: string;
    content: string;
    links?: IBlogLinks;
}

interface IBlogStructure {
    introduction: IBlogIntroduction;
    main_sections: Array<IBlogSection>;
    conclusion: IBlogConclusion;
}

interface IBlogDataType {
    url: string;
    title: string;
    description: string;
    image: string;
    feature_image: string;
    structure: IBlogStructure;
}

export type {
    IPackageDetailDataType,
    IItineraryDetailDataType,
    IItineraryLineDataType,
    ITestimonialDataType,
    IBlogDataType,
    IBlogIntroduction,
    IBlogSection,
    IBlogConclusion,
    IBlogStructure,
    IBlogLink,
    IBlogLinks,
    IBlogBulletPoint,
    IBlogSubheading,
};
