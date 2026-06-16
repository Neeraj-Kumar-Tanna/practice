

function login(){
    let password;
    return {
        create(att){
            password = att;
            console.log("passwoed set");
        },
        check(att){
            if(password === att){
                console.log("correct password");
            }
            else{
                console.log("wrong password");
            }
        }
    }
}

let person1 = login();
person1.create("neeraj123");
person1.check("neeraj1234");