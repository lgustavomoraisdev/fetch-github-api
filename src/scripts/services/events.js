import { baseUrl, eventsQuantity } from '../variables.js'

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/devemdobro/events?per_page=${eventsQuantity}`)
    return await response.json()
}

export { getEvents }