import {h1 , div , p , a , img} from "./shortcuts.js";

var div_left = div({className : "divLeft"},
    p("about me") ,
    p("Portfolio") ,
    p("services") ,
    p("Blog")
);

var div_right = div({className : "divright"},
    a("Book an appointment" , "#bookAppointment" , {style:{textDecoration : "none"}})
);

var div_header = div({className : "divhead"},div_left , div_right);

let main = ReactDOM.createRoot(document.querySelector("#main"));

let xyz = ReactDOM.createRoot(document.querySelector("#xyz"));

var div_right1 = div({className : "body_right"} , img("neeraj" , "https://images.unsplash.com/photo-1779896412192-cca060dfafde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" , {height : "100px"}));

xyz.render(div_header1);


// var div_left = div({className : "body_left"} , );

// main.render(div_right);
// var body = div({className : "body_div"} , div_left , div_right);