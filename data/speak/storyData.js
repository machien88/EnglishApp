const data = {
    "story": [
        {
            "title": "Title",
            "data": [
                {
                    "content": "Content",
                    "translate": "Translate"
                }
            ]
        },
    ]
}
const getStory = () => {
    return data.story;
};
export default { getStory };