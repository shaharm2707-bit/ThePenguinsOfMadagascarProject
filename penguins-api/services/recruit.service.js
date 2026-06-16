export const getRandomRecruit = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    return {
        title: "New recruit candidate",
        commander: "Skipper",
        message: "Kowalski, analysis!",
        imageUrl: data.message
    };
};