function cutAndReverse(str = '') {
    const half = Math.floor(str.length / 2);
    const firstHalf = str.slice(0, half);
    const secondHalf = str.slice(half);

    console.log(firstHalf.split('').reverse().join(''));
    console.log(secondHalf.split('').reverse().join(''));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');