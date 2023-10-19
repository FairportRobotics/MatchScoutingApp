/******************************************************************************
This function attempts to retrieve data from the API and update the cache.

API empty / Cache empty
- Recommend connecting to a network

API exists / Cache empty
- Update cache
- Return API data

API empty / Cache exists
- Return Cache data

API exists / Cache exists
- Update cache if out of date
- Return API data
******************************************************************************/
export default async function (apiUrl, cacheKey) { 

    // Prepare a status object we can return to callers.
    let cacheStatus = {
        cacheKey: cacheKey,

        apiItemCount: null,
        apiLastUpdatedDate: null,

        cacheItemsCount: null,
        cacheLastUpdatedDate: null,

        errorMessage: null,
        statusMessage: null,
    }

    // Attempt to call the API and receive results.
    let apiData = []
    await useFetch(apiUrl, {
        onRequest({ request, options }) {
          // Set the request headers. Not needed now but leaving this hook
          // here for future.
          //options.headers = options.headers || {}
          //options.headers.authorization = '...'
        },
        onRequestError({ request, options, error }) {
          // Handle the request errors.
          cacheStatus.errorMessage = error
        },
        onResponse({ request, response, options }) {
          // Process the response data.
          apiData = response._data
          cacheStatus.apiItemCount = apiData.length
        },
        onResponseError({ request, response, options }) {
          // Handle the response errors.
          cacheStatus.errorMessage = error
        }
    })

    // Handle the case where the API returned successfully, but there is no 
    // response data. This could be due to a data store being empty or the
    // API had an issue that did not result in an error.
    if(!apiData) {
        cacheStatus.apiItemCount = 0
        cacheStatus.statusMessage = "API unreachable (using existing cache)"

        return cacheStatus
    }


    // We do have data from the API and we now need to evaluate the records to 
    // determine the most recent updatedDate. This date indicates when the data 
    // store was last updated.
    let apiLastUpdated = new Date(Math.max(...apiData.map(item => new Date(item.updatedDate))))
    cacheStatus.apiLastUpdatedDate = apiLastUpdated


    // Attempt to retrieve any previously cached data. Handle the case where 
    // there is no cached data. We will need to persist the results of the API
    // call to the cache.
    let cachedData = JSON.parse(localStorage.getItem(cacheKey))
    if(!cachedData) {
        localStorage.setItem(cacheKey, JSON.stringify(apiData))
        cacheStatus.statusMessage = "Initialized from API data"

        return cacheStatus
    }


    // We have the cached data so we can determine how many elements exist.
    cacheStatus.cacheItemsCount = cachedData.length


    // If there is a cached version of the data, compare the most recent updated 
    // dates and optionally update the cache.
    let cacheLastUpdated = new Date(Math.max(...cachedData.map(item => new Date(item.updatedDate)))) ?? 0
    cacheStatus.cacheLastUpdatedDate = cacheLastUpdated
    if(apiLastUpdated > cacheLastUpdated) {
        localStorage.setItem(cacheKey, JSON.stringify(apiData))
        cacheStatus.statusMessage = "Updated to reflect API data"
        cacheStatus.cacheLastUpdatedDate = apiLastUpdated

        return cacheStatus
    }


    // Finally, handle the case where the cache is already current and up-to-date.
    cacheStatus.statusMessage = "Current (matches API data)"

    return cacheStatus
}