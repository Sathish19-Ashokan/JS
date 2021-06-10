run(function* () {
    //const fetch = require('node-fetch');
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const response = yield fetch(url);
    const post = yield response.json();
    const title = post.title;
    //console.log('Title', title);
    return title;
}).then(res => console.log('Title',res))

function run(generator){
        const gen = generator();
        function resolve(next){
            if(next.done){
                return Promise.resolve(next.value);
            }
            return Promise.resolve(next.value).then(res => {
                return resolve(gen.next(res))
            })
        }
        return resolve(gen.next())
}