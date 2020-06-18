class Maths {

    //toplama
    collect(onenumber, twonumber){

        let result = parseInt(onenumber) + parseInt(twonumber);

        return result;

    };

    //çıkarma
    subtraction(onenumber, twonumber){
        
        let result = parseInt(onenumber) - parseInt(twonumber);

        return result;

    };

    //iki sayının karesi
    squares(number){

        let result = parseInt(number) * parseInt(number)

        return result;
    };
    
    //problem çözme
    problem(problem){
    
        let result = parseInt(problem);
        
        return result;
    };

    //yuvarlama
    round(number){

        let result = Math.round(number)

        return result;
    };

    //bölme
    divide(onenumber, twonumber){

        let result = parseInt(onenumber) / parseInt(twonumber)

        return result;

    };

    //çarpma
    multiplicat(onenumber, twonumber){

        let result = parseInt(onenumber) * parseInt(twonumber)

        return result;
    };

    //ekok  
    scf(onenumber, twonumber){

        let n1 = onenumber, n2 = twonumber,ebob=1, ekok;
 
        for(let i = 1; i <= n1 && i <= n2; ++i)
         {
             if(n1 % i == 0 && n2 % i == 0)
                 ebob = i;
         }
         ekok = (n1 * n2) / ebob;
         let result = ekok;

         return result;

    };

    //ebok
    bcf(onenumber, twonumber){

        let n1 = onenumber, n2 = twonumber,ebob=1, ekok;
 
        for(let i = 1; i <= n1 && i <= n2; ++i)
         {
             if(n1 % i == 0 && n2 % i == 0)
                 ebob = i;
         }
         ekok = (n1 * n2) / ebob;
         let result = ebob

         return result;

    };
    
};
    
module.exports = Maths;
