export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
): number[] {
    
    const reversed_collection2: number[] = []

    for(let i = collection_2.length-1; i >= 0; i--){
        reversed_collection2.push(collection_2[i]!);
    }

    const merge12 = mergeTwoSorted(collection_1, reversed_collection2)
    return mergeTwoSorted(merge12,collection_3);
}

function mergeTwoSorted (arr1: number[], arr2: number[]): number[]{
    const result: number[] = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length){
        if(arr1[i]! <= arr2[j]!){
            result.push(arr1[i]!);
            i++;
        }else{
            result.push(arr2[j]!);
            j++
        }
    }
    while (i < arr1.length){
        result.push(arr1[i]!);
        i++;
    }
    while (j < arr2.length){
        result.push(arr2[j]!);
        j++
    }

    return result
} 