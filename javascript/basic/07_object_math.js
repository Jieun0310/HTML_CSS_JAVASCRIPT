// math Object
{
    // console.log(Math)
    // console.log(Math.PI)

    // const sum = 9.4
    // const sum2 ='12.12463'
    // console.log(Math.round(sum)) // round = 소수점 첫째짜리에서 반올림해서 정수를 반환한다.
    // console.log(Math.ceil(sum)) // ceil = 무조건 올림 ex) 소수점이 1이더라도 그냥 올림
    // console.log(Math.floor(sum)) //floor = 소수점 무조건 버림
    // console.log(parseInt(sum2)) // 문자를 숫자로 반환하는데 소수점 이하는 버림
    // console.log(Number(sum2)) //문자를 숫자로 반환
}


{
    const num = Math.random() // 0과 1사이에 숫자 랜덤으로 출력 가능
    console.log(num) 

    // 0 ~ 9사이 정수 출력하기
    console.log(Math.floor(Math.random() * 10))

    // 1 ~ 10사이 정수 출력하기
    console.log(Math.floor(Math.random() * 10)) + 1

    const food = [ '김밥', '우동', '칼국수', '햄버거']
    const randomNum = Math.floor(Math.random() * food.length)
    console.log(food[randomNum])
}