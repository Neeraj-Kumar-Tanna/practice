function outer(){
    let x = 0;
    
    return {
        inner(){
            if(x <= 5){
                x++;
                console.log(x);
            }
            else{
                console.log("limit  exceeded.....");
            }
        },

        reset(){
            x = 0 ;
            console.log("reseted.......");
        }


    }
}

let a = outer();
a.inner();
a.inner();
a.inner();
a.inner();
a.inner();
a.inner();
a.inner();
a.inner();
a.reset();
a.inner();
a.inner();
a.inner();

