import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'ygib1qg7',
  dataset: 'production',
  useCdn: true, // Enable this for faster response times (optional)
  apiVersion: '2023-08-28',
  useCdn : 'true',
  token : 'skNLJsAKU1beuokZwm6IZ1XvqzXP4b6keq93gKDR3M7KWYQNtlIZzmBrBNhgjncfyj9g7w82TUer4Ze3Wto15c6lSsT74wLrXKKpVKm1jW9uL5aLmGSFzSjzleafyTCboLzUQNANMzUWv1IqGaLnB5me5LajWkkxfYakhsFZ5OQ0ohhqGASt'

});

export default client;