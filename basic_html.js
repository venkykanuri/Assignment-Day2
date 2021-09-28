    let x=5;
      let y = 10;
      let  z=15;
      let n = 'venky';
      a=z+x;
      let roll = 584;
      //window.alert(n);
      document.getElementById("result").innerHTML = "the value of a is :" +a+"   and my name is :" + n;
      document.getElementById("name").innerHTML = "name is  :" + n+ "  and my roll number is " +roll;
      document.write(10)

      //fuction call
      let multiplication = multi(3,4);

      function multi(a,b)
      {
         let c = a*b;
         console.log(c);
         

      }
      function alertBox()
      {
          window.alert("please wait...");
      }

      //writing functions as arrow functions
      const sum =(a,b)=>
      {
          let c=a+b;
          console.log(c);
      }
      let f =sum(5,4);

      let numbers =[4,7,6,2,9,45]
      numbers.sort((a,b)=>b-a);//giving in desc order
      console.log(numbers)

    let number = [76,34,5,2,4]
    number.sort((a,b) =>a-b);//giving in asc order
    console.log(number);

    //anonymous function using map function to find lengths
    let names = ['venky','jaya','ram','balaraju']
    names.map(name=>console.log(name.length))