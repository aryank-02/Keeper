import React from "react";

function Footer () {

const year = new Date();
const currentyear = year.getFullYear();

return (<footer><p>Copyright{currentyear}</p>
</footer>)
}

export default Footer;