const data = {
    "story": [
        {
            "title": "Title",
            "data": [
                {
                    "content": "Content",
                    "translate": "Transe"
                }
            ]
        },
    ]
}
const getStory = () => {
    return data.story;
};
export default { getStory };