export const transformAverageToTenth = (data: number): number => {
    if (typeof data !== 'number') {
        throw new Error('The data must be a number.');
    }

    const averageString = data.toFixed(1); 
    const averageNumber = parseFloat(averageString); 

    return averageNumber;
}