import Animal from "../interfaces/animal";

type ResponseData = {
    message: string,
    body: { items: {item: Animal[]} }
}

export async function getAnimalsByUpkind(upkind?: string): Promise<Animal[]> {
    const endPoint = "";

    const response = await fetch(endPoint);
    const data = <ResponseData> await response.json();

    return data.body.items.item;
}