const API_KEY='34863112-e4eaf59f6cac1684aac16b51e'

export const searchImg = (imgName, page, perPage) => {
    return fetch(
        `https://pixabay.com/api/?q=${imgName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    ).then(response=> response.json())
}