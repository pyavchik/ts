interface Post {
    title: string,
    daysOld: number
    published: boolean
}

const post = {
    title: 'Latest Typescript News',
    daysOld: 10,
    published: true
};

const printPost = (postToPrint: Post) => {
    return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
};
printPost(post);
