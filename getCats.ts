
import fetch, { Response } from 'node-fetch';

//  用你的请求路径
const url = 'https://laf.run/v1/apps/your/databases/proxy';

const payload = {
    collectionName: 'cat',
    query: {},
    limit: 10,
    action: "database.queryDocument"
};

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'yours' // 用你的验证
};

export function getCats() {
    return fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        const cats = data.data.list
        const catName : { [key: string]: any} = {}
        for (const cat of cats){
            // console.log(cat)
            catName[cat._id] = cat.nickname
        }
        return catName
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

getCats()

