let str = "1.5, 2.3, 3.1, 4,5.5, 6, 7, 8, 9, 10.9" ;

const calculate_sum = (str) => {
    let str_arr = str.split(",");
    console.log(str_arr);
    let answer = str_arr.reduce((acc , val) => {
        acc = acc + +val;
        return acc;
    },0);
    return answer;
    
}


console.log(calculate_sum(str));