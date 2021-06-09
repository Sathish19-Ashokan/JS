run(function* () {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const response = yield fetch(url);
    const post = yield response.json();
    const title = post.title;
    console.log('Title', title);
})

function run(generator) {
    const obj = generator();
        const val = obj.next().value;
        val.then(res => {
            return obj.next(res).value;
        }).then(value => {
            obj.next(value);
        })
}
