export const httpGet = <T>(url: string) => fetch(url).then(x => x.json() as T)
export const httPost = <TBody, TResponse>(url: string, body:TBody) => fetch(url,{
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
        "Content-Type": "application/json",
    },
}).then(x => x.json() as TResponse);
export const httpDelete = (url: string) => fetch(url,{ method: 'DELETE'})