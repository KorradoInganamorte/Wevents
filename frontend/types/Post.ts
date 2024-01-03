export default interface CardData {
    data: data[]
    meta: meta
}

interface data {
    id: number
    attributes: {
        createdAt: string
        updatedAt: string
        publishedAt: string
        EventCard: EventCard[]
    }
}

interface EventCard {
    id: number
    country: string
    date: string
    price: string
    event: string
    description: string
    image: image
    image_more: imageMore
    founded: string
    year: string
}

interface image {
    data: {
        id: number
        attributes: {
            name: string
            alternativeText: string
            url: string
        }
    }
}

interface imageMore {
    data: [{
        id: number
        attributes: {
            name: string
            alternativeText: string
            url: string
        }
    }]
}

interface meta {
    pagination: {
        page: number
        pageSize: number
        pageCount: number
        total: number
    }
}