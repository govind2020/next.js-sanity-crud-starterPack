import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId : 'ygib1qg7' ,
    dataset : 'production',
    apiVersion: '2023-08-28',
    useCdn : 'true',
    token : 'skn8dhHltzzIjDOof0oYioSVUAvayy9xcO79r2Zew50UdpQMs0pdawRVCqpxJInGWlb9yOFHTWzxnkkTjHWikjSTeQjBwOVyVh5IYKvFdSFBGAyQ3y4uURNpcwQKTIBoAJ7fK6Avjld4YXqrUCSNT9cgCyffX5shxCc8rKMWtHTwxScLBsMR'

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);