const getPuzzleAsync = async (noOfWords) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${noOfWords}`);
    if(response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error (`Bad Request`);
    }
};

export { getPuzzleAsync as default };

