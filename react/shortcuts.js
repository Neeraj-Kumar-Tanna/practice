export const h1 = (name , props={})=> React.createElement("h1" , props , `${name}!!`);

export const p = (name , props={}) => React.createElement("p" , props , `${name}`);

export const div = (props={} , ...args) => React.createElement("div" , props , [...args]);

export const a = (text, href = "#", props = {}) => React.createElement("a", { href, ...props }, text);

export const img  = (text , href , props={}) => React.createElement("img" , {href , ...props} , text) ;