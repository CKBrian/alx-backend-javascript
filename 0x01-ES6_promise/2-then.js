export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => { console.log({ status: 200, body: 'Success' }); })
    .then(() => { console.log('Got a response from the API'); })
    .catch(new Error());
}
