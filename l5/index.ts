const post = {
    title: 'Latest Typescript News',
    daysOld: 10,
    published: true
};

const printPost = (postToPrint: { title: string, daysOld: number }) => {
    return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
};
